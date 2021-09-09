import React, { useEffect, useMemo, useState, MouseEvent } from "react";
import clsx from "clsx";
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
} from "@material-ui/core";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import Event from "../../types/Event";

import Link from "../../components/Link";
import TitleBar from "../../components/TitleBar";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { Music as MusicIcon } from "mdi-material-ui";
import { VariantType, useSnackbar } from "notistack";
import { useCookies } from "react-cookie";

import axios from "axios";
import EmptySpace from "../../components/EmptySpace";
import Separator from "../../components/Separator";
import VoteCard from "../../components/VoteCard";
import { useServerManager } from "../../components/ServerManagerProvider";

function VoteByEvent(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
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

  const sm = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const md = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
  const lg = useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"));
  const xl = useMediaQuery((theme: Theme) => theme.breakpoints.down("xl"));

  const category = useMemo(() => {
    const temp = router.query.category;

    if (typeof temp === "string") {
      var index = parseInt(temp);
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

  useEffect(() => {
    console.log(event);
  }, []);

  const handleVote = (e: MouseEvent, id: number) => {
    setVoting(true);
    serverManager
      .voteByItem(id, voteType, "")
      .then((response) => {
        const { data } = response;
        enqueueSnackbar(`¡Gracias por votar en ${event.name}!`, {
          variant: "success",
        });
        setCookie(`vote/${data.groupId}`, "vote");
      })
      .catch((error) => {
        enqueueSnackbar(
          "¡Ha ocurrido un error al procesar su voto! Por favor intentelo más tarde.",
          {
            variant: "error",
          }
        );
      })
      .finally(() => {
        setVoting(false);
      });
  };

  const renderSubgroups = () => {
    const subgroup = event.groups[category];

    return subgroup.childGroups.map((group) => {
      const existVote = cookies[`vote/${group.id}`];
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
              group.items.map((item) => (
                <GridListTile key={item.id} className={classes.tile}>
                  <VoteCard
                    data={item}
                    onVote={handleVote}
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
      })
  };

  return (
    <>
      <NextSeo
        title={event.name}
        description={event.description}
        openGraph={{
          title: event.name,
          description: "Vote ya en el evento Cubadisco 2021",
          images: [{ url: event.coverPath }],
        }}
      />

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
            autoFocus disableElevation
          >
            Continuar
          </Button>
        </DialogActions>
      </Dialog>

      <div>
        <TitleBar title={event.name as string} background={event.coverPath}>
          <Link href="/" color="inherit">
            Inicio
          </Link>
          <Typography color="inherit">Votos</Typography>
          <Typography color="inherit">{event.name}</Typography>
        </TitleBar>

        <div className={classes.categoriesFilter}>
          <Typography color="primary" variant="h4">
            Seleccione el área
          </Typography>
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
      var index = parseInt(category);
      if (!isNaN(index)) categoryIndex = index;
    }

    if (categoryIndex >= event.groups.length)
      return {
        notFound: true,
        props: {},
      };

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
