import React, {ChangeEvent, useCallback, useMemo, useState} from "react";
import {
  Backdrop,
  Box,
  Fade,
  Grid, Icon,
  IconButton,
  InputAdornment,
  Modal,
  TextField,
  ThemeProvider,
  Fab
} from "@material-ui/core";
import {Close as CloseIcon, Search as SearchIcon, ExpandLess as ExpandLessIcon} from "@material-ui/icons";
import VideoLink from "../../../components/VideoLink";
import useSetInterval from "../../../utils/useSetInterval";
import useStyles from "./styles";
import {InferGetServerSidePropsType} from "next";
import axios from "axios";
import Event from "../../../types/Event";
import Video from "../../../types/Video";
import {darkTheme} from "../../../config";
import {useCookies} from "react-cookie";
import CustomFade from "../../../components/CustomFade";
import ReCAPTCHA from "react-google-recaptcha";
import {useServerManager} from "../../../components/ServerManagerProvider";
import {useSnackbar} from "notistack";
import { useScrollTrigger } from "@material-ui/core";
import {animateScroll} from "react-scroll";

export default function PremiosLucas2021 (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
): JSX.Element{

  const classes = useStyles();
  const { event } = props;
  const [image, setImage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");
  const [cookies, setCookie] = useCookies();
  const [isReCAPTCHAOpen, setIsReCAPTCHAOpen] = useState<boolean>(false);
  const [videoModal, setVideoModal] = useState<{isOpen: boolean, url: string}>({isOpen: false, url: null});
  const [videoToVote, setVideoToVote] = useState<Video>(null);
  const serverManager = useServerManager();
  const { enqueueSnackbar } = useSnackbar();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 4,
  });

  const changeImage = () => {
    if (image > 2)
      setImage(1);
    else
      setImage(prevState => prevState+1);
  };

  const startVote = (video: Video) => {
    setVideoToVote(video);
    setIsReCAPTCHAOpen(true);
  };

  const openVideo = (video: Video) => {
    setVideoModal({isOpen: true, url: video.Link});
  };

  const handleVote = (token: string) => {
    setIsReCAPTCHAOpen(false);
    serverManager
      .voteByItem(videoToVote.Id, "default", token)
      .then((response) => {
        const { data } = response;
        enqueueSnackbar(`¡Usted ha votado por ${videoToVote.Author} ${videoToVote.Title}!`, {
          variant: "success",
        });
        setCookie(`vote/premioslucas2021/${data.groupItemId}`, Number, {expires: new Date(2031, 12, 31)});
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
        setVideoToVote(null);
      });
  };

  const allVotes: boolean = useMemo(()=> {
    return  Object
      .keys(cookies)
      .filter(cookie => cookie.toString().toLowerCase().includes("vote/premioslucas2021".toLowerCase()))
      .length >= 10;
  }, [cookies]);

  const searchEndpoint = (query: string) => `/api/search?q=${query}`;

  const onSearchChange = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
    setSearch(event.target.value);
    axios
      .get(searchEndpoint(event.target.value))
      .then(r => console.log(r.data.results) );
  }, []);

  const scrollToTop = () => {
    animateScroll.scrollTo(0, {});
  };

  useSetInterval(() => changeImage(), 10000);

  return (
    <ThemeProvider theme={darkTheme}>
      <div className={classes.container}>
        <div className={classes.image1}/>
        <Box className={classes.verticalContainer}>
          <Box className={classes.grid}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={12} md={6} xl={6} style={{zIndex:100}}>
                <h1 className={classes.title}>
                  Votación por el video clip más popular Premios Lucas ciclo 2020-2021
                </h1>
                <p className={classes.subtitle}>Solo se puede votar por 10 videos, la votación no es reversible</p>
              </Grid>
              <Grid item xs={12} sm={12} md={6} xl={6} className={classes.textFieldContainer} >
                <TextField
                  label="Buscar"
                  variant="outlined"
                  color={"secondary"}
                  className={classes.textField}
                  value={search}
                  InputProps={{
                    className: classes.input,
                    startAdornment: <InputAdornment position={"start"}><SearchIcon/></InputAdornment>
                  }}
                  onChange={onSearchChange}
                />
              </Grid>
            </Grid>
          </Box>
          <Box className={classes.grid}>
            <Grid
              container
              spacing={1}
              wrap={"wrap"}
            >
              {
                event.groups[0].videos
                  .sort((a, b) => a.Number - b.Number)
                  .filter(
                    video =>
                      video.Title?.toLowerCase().includes(search.toLowerCase()) ||
                                video.Author?.toLowerCase().includes(search.toLowerCase()) ||
                                video.Number?.toString().toLowerCase().includes(search.toLowerCase())

                  )
                  .map((video, index) =>
                    <VideoLink
                      allVotes={allVotes}
                      startVote={startVote}
                      voting={videoToVote?.Id}
                      openVideo={openVideo}
                      video={video as Video}
                      key={index}
                      cookies={cookies}
                    />
                  )
              }
            </Grid>
          </Box>
        </Box>
      </div>
      <Modal
        open={isReCAPTCHAOpen}
        className={classes.modal}
        onClose={() => {
          setIsReCAPTCHAOpen(false);
          setVideoToVote(null);
        }}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <ReCAPTCHA
          sitekey={"6LcNay8cAAAAAH43qGJAbO37RjpMDkvxjuZPbPQI"}
          onChange={handleVote}
          hl="es"
        />
      </Modal>
      <Modal
        className={classes.modal}
        open={videoModal.isOpen}
        onClose={() => setVideoModal({isOpen: false, url: null})}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={videoModal.isOpen}>
          <div className={classes.paper}>
            <IconButton
              onClick={()=> setVideoModal({isOpen: false, url: null})}
              className={classes.closeButton}
            >
              <Icon>
                <CloseIcon />
              </Icon>
            </IconButton>
            <iframe
              className={classes.iframeResponsive}
              src={`https://www.youtube.com/embed/${videoModal.url?.split("https://youtu.be/")[1]}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </Fade>
      </Modal>
      <Fade in={trigger}>
        <Fab className={classes.fab} onClick={scrollToTop}>
          <ExpandLessIcon/>
        </Fab>
      </Fade>
    </ThemeProvider>
  );
}


export async function getServerSideProps() {
  try {
    const eventResponse = await axios.get<Event>(
      `${process.env.NEXT_PUBLIC_API_URL}/event/premioslucas2021`
    );
    const event:Event = eventResponse.data;
    event.groups[0].videos = [];
    event.groups[0].items.forEach(item => {
      event.groups[0].videos.push({
        ...JSON.parse(item.metadataJson), Id: item.id
      });
    });
    return {
      props: {
        event
      },
    };
  } catch (error) {
    return {
      notFound: false,
      props: {
        error: error.toString()
      },
    };
  }
}

