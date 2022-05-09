import React, { useEffect, useMemo, useState, MouseEvent } from "react";
import {
  Button,
  makeStyles,
  Theme,
  Typography,
  useMediaQuery,
  GridList,
  GridListTile,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Modal,
  Backdrop,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import Event from "../../types/Event";
import Group from "../../types/Group";
import { Search as SearchIcon, CloudDownload as CloudDownloadIcon } from "@material-ui/icons";
import Link from "../../components/Link";
import TitleBar from "../../components/TitleBar";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { Music as MusicIcon } from "mdi-material-ui";
import { useSnackbar } from "notistack";
import { useCookies } from "react-cookie";

import axios from "axios";
import EmptySpace from "../../components/EmptySpace";
import Separator from "../../components/Separator";
import VoteCard from "../../components/VoteCard";
import { useServerManager } from "../../components/ServerManagerProvider";
import ReCAPTCHA from "react-google-recaptcha";

function VoteByEvent(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
): JSX.Element {
  const { event } = props;
  const router = useRouter();
  const classes = useStyles();
  const serverManager = useServerManager();
  const [cookies, setCookie] = useCookies();
  const { enqueueSnackbar } = useSnackbar();

  const [voting, setVoting] = useState(false);
  const [specialVoteDialog, setSpecialVoteDialog] = useState(false);
  const [name, setName] = useState("");
  const [institution, setInstitution] = useState("");
  const [email, setEmail] = useState("");
  const [voteType, setVoteType] = useState("default");
  const [isReCAPTCHAOpen, setIsReCAPTCHAOpen] = useState<boolean>(false);
  const [voteId, setVoteId] = useState<number>(0);
  const [search, setSearch] = useState<string>("");

  const sm = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const md = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
  const lg = useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"));
  const xl = useMediaQuery((theme: Theme) => theme.breakpoints.down("xl"));

  const category = useMemo(() => {
    const temp = router.query.category;

    if (typeof temp === "string") {
      const index = parseInt(temp);
      if (isNaN(index)) return 0;
      return index;
    }
    return 0;
  }, [router.query.category]);

  useEffect(() => {
    const temp = router.query.special;

    if (typeof temp === "string" && temp !== undefined) {
      setSpecialVoteDialog(true);
    }
  }, []);

  const cols = useMemo(() => {
    if (sm) return 1;
    if (md) return 2;
    if (lg) return 4;
    if (xl) return 5;
    return 4;
  }, [sm, md, lg]);

  const startVote = (e: MouseEvent, id: number) => {
    e.preventDefault();
    setVoting(true);
    setVoteId(id);
    setIsReCAPTCHAOpen(true);
  };

  const handleVote = (token: string) => {
    setVoting(true);
    serverManager
      .voteByItem(voteId, voteType, token)
      .then((response) => {
        const { data } = response;
        enqueueSnackbar(`¡Gracias por votar en ${event.name}!`, {
          variant: "success",
        });
        setCookie(`vote/${event.identifier}/${data.groupId}`, "vote");
      })
      .catch(() => {
        enqueueSnackbar(
          "¡Ha ocurrido un error al procesar su voto! Por favor intentelo más tarde.",
          {
            variant: "error",
          }
        );
      })
      .finally(() => {
        setVoting(false);
        setIsReCAPTCHAOpen(false);
      });
  };

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const renderSubgroups = () => {
    const subgroup = event.groups[category];
    return subgroup.childGroups.map((group) => {
      const existVote = cookies[`vote/${event.identifier}/${group.id}`];
      return (
        <div key={group.id}>
          <Separator
            title={group.name}
            text={group.description}
            innerMarginSize="small"
          >
            <MusicIcon />
          </Separator>

          <GridList cellHeight="auto" cols={cols} className={classes.list}>
            {group.items &&
              group.items
                .filter(
                  (item) =>
                    item.name.toLowerCase().includes(search.toLowerCase()) ||
                    item.metadata?.interpreter
                      ?.toLowerCase()
                      .includes(search.toLowerCase()) ||
                    item.metadata?.productor
                      ?.toLowerCase()
                      .includes(search.toLowerCase()) ||
                    item.metadata?.productorHome
                      ?.toLowerCase()
                      .includes(search.toLowerCase())
                )
                .map((item) => (
                  <GridListTile key={item.id} className={classes.tile}>
                    <VoteCard
                      data={item}
                      onVote={startVote}
                      disableVote={existVote}
                    />
                  </GridListTile>
                ))}
          </GridList>
          <EmptySpace />
        </div>
      );
    });
  };

  const changeCategory = (index: number) => {
    router.push(
      {
        pathname: router.pathname,
        query: {
          ...router.query,
          category: index,
        },
      },
      undefined,
      { shallow: true }
    );
  };

  useEffect(() => {
    router.push(
      {
        pathname: router.pathname,
        query: {
          ...router.query,
          category: 0,
        },
      },
      undefined,
      { shallow: true }
    );
  }, []);

  const cancelSpecialVote = () => {
    const queries = router.query;
    delete queries.special;
    router.push(
      {
        pathname: router.pathname,
        query: {
          ...queries,
        },
      },
      undefined,
      { shallow: true }
    );
    setSpecialVoteDialog(false);
  };

  const submitSpecialVote = () => {
    serverManager
      .createSubscriber(name, institution, email)
      .then(() => {
        setVoteType("special");
      })
      .catch(() => {
        setSpecialVoteDialog(false);
      });
  };

  const openPdf = () => {
    window.open("https://media.streamingcuba.com/events/cubadisco-2022/CUBADISCO_2022.pdf", "_blank");
  };

  return (
    <>
      <NextSeo
        title={event.name}
        description={event.description}
        openGraph={{
          title: event.name,
          description: "Vote ya en el evento Cubadisco 2022",
          images: [{ url: event.coverPath }],
        }}
      />

      <Modal
        open={isReCAPTCHAOpen}
        className={classes.modal}
        onClose={() => {
          setIsReCAPTCHAOpen(false);
        }}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_SITE_KEY}
          onChange={(token: string) => handleVote(token)}
          hl="es"
        />
      </Modal>

      <Dialog open={specialVoteDialog}>
        <DialogTitle>Indentifíquese antes de votar</DialogTitle>
        <DialogContent>
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="Nombre"
            fullWidth
          />
          <TextField
            value={institution}
            onChange={(e) => setInstitution(e.target.value)}
            label="Institución"
            fullWidth
          />
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Correo electrónico"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={cancelSpecialVote} color="secondary">
            Cancelar
          </Button>
          <Button
            onClick={submitSpecialVote}
            color="primary"
            variant="contained"
            autoFocus
            disableElevation
          >
            Continuar
          </Button>
        </DialogActions>
      </Dialog>

      <div style={{minHeight: "100vh"}}>
        <TitleBar title={event.name as string} background={event.coverPath}>
          <Link href="/" color="inherit">
            Inicio
          </Link>
          <Typography color="inherit">Votos</Typography>
          <Typography color="inherit">{event.name}</Typography>
        </TitleBar>

        <div className={classes.categoriesFilter}>
          <div className={classes.textFieldContainer}>
            <Typography
              align="center"
              color="primary"
              variant="h4"
              className={classes.filterTitle}
            >
              Seleccione el área
            </Typography>
            {category === 0 && <TextField
              label="Buscar"
              variant="outlined"
              color={"primary"}
              className={classes.textField}
              value={search}
              InputProps={{
                className: classes.input,
                startAdornment: (
                  <InputAdornment position={"start"}>
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              onChange={onSearchChange}
            />}
            <IconButton onClick={openPdf}>
              <CloudDownloadIcon />
            </IconButton>
          </div>
          <div className={classes.chipsList}>
            {event.groups.map((group, index) => (
              <Chip
                onClick={() => changeCategory(index)}
                color="primary"
                variant={category === index ? "default" : "outlined"}
                className={classes.chip}
                label={group.name}
                key={index}
              />
            ))}
          </div>

          <EmptySpace size={1} />
        </div>

        <div className={classes.container}>{renderSubgroups()}</div>
      </div>
    </>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    position: "relative",
    zIndex: 1,
    width: "100%",
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
    maxWidth: "1300px",

    "& > h1": {
      margin: 0,
      color: "#fff",
      fontSize: "3rem",
      fontWeight: 600,
      wordBreak: "break-word",
    },
  },
  categoriesFilter: {
    textAlign: "center",
  },
  chipsList: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(1),
  },
  tile: {
    display: "flex",
    justifyContent: "center",
  },
  pageContent: {
    width: "100%",
    borderRadius: "5px",
    padding: "30px",
    backgroundColor: "#fff",
    marginBottom: "30px",
  },
  list: {
    justifyContent: "center",
  },
  contentHeader: {
    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px",
    margin: "-30px -30px 30px",
    overflow: "hidden",
    position: "relative",
  },
  descriptionContent: {
    fontSize: "14px !important",
    whiteSpace: "break-spaces",
    textAlign: "justify",
  },
  image: {
    verticalAlign: "middle",
    borderStyle: "none",
    maxWidth: "100%",
    height: "auto",
  },
  detailWidget: {
    width: "100%",
    borderRadius: "5px",
    padding: "30px",
    backgroundColor: "#fff",
    marginBottom: "30px",
  },
  widgetTitle: {
    fontSize: "1.231rem",
    marginBottom: "20px",
    fontWeight: 600,
    margin: "-30px -30px 30px",
    borderBottom: "1px solid #eaeaea",
    padding: "30px 30px 25px",
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  reactionsBox: {
    display: "flex",
    margin: "-4px",
  },
  like: {
    display: "block",
    color: "#888",
    textTransform: "uppercase",
    fontSize: ".9230769230769231rem",
    fontWeight: 500,
    margin: "4px",

    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  ul: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  li: {
    display: "flex",
    alignItems: "flex-start",
    marginBottom: "25px",
    borderBottom: "1px solid #eee",
    paddingBottom: "25px",
  },
  detailItemContent: {
    width: "100%",
  },
  detailItemTitle: {
    textTransform: "uppercase",
    marginBottom: "2px",
    fontWeight: 600,
    fontSize: ".7692rem",
    letterSpacing: "1px",
  },
  detailItemInner: {
    fontSize: ".9231rem",
    color: "#888",

    "& > a": {
      color: "inherit",
      textDecoration: "none",
    },
  },
  socialLinks: {},
  icon: {
    fontSize: "1.923rem",
    lineHeight: "1.923rem",
    paddingRight: "25px",
    width: "60px",

    "& > svg": {
      fill: theme.palette.primary.main,
    },
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  textField: {
    margin: "10px",
  },
  filterTitle: {
    // marginLeft: "auto",
    // marginRight: "auto",
    width: "-webkit-fill-available",
  },
  textFieldContainer: {
    marginTop: "20px",
    marginBottom: "20px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "right",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  input: {
    backgroundColor: "rgba(255,255,255, 0.2)",
    color: "black",
  },
}));

export default VoteByEvent;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const { query, params } = context;
    const { id } = params;
    const { category } = query;
    const eventResponse = await axios.get<Event>(
      `${process.env.NEXT_PUBLIC_API_URL}/event/${id}`
    );

    const event = eventResponse.data;
    let categoryIndex = 0;
    if (typeof category === "string") {
      const index = parseInt(category);
      if (!isNaN(index)) categoryIndex = index;
    }

    if (categoryIndex >= event.groups.length)
      return {
        notFound: true,
        props: {},
      };

    const allItemsGroup: Group = {
      "id": 33,
      "name": "TODOS",
      "description": null,
      "childGroups": [{
        "childGroups": [],
        "id": 0,
        "name": "Todos los Discos",
        "description": null,
        "items": [],
        "videos": [],
      }],
      "items": [],
      "videos": [],
    };
    event.groups.forEach((group) => {
      group.childGroups.forEach((childGroup) => {
        childGroup.items.forEach((item) => {
          allItemsGroup.childGroups[0].items.push(item);
        });
      });
    });
    event.groups.unshift(allItemsGroup);

    return {
      props: {
        event,
      },
    };
  } catch {
    return {
      notFound: true,
      props: {},
    };
  }
}
