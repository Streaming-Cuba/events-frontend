import React, {useState} from "react";
import {Icon, IconButton, Grid, Tooltip, Fade, Modal, Backdrop} from "@material-ui/core";
import { HowToVote as HowToVoteIcon, Close as CloseIcon } from "@material-ui/icons";
import Image from "next/image";
import {getVideoImageURL} from "../../utils/YoutubeUtils";
import Video from "../../types/Video";
import {useSnackbar} from "notistack";
import useStyles from "./styles";
import clsx from "clsx";
import {useServerManager} from "../ServerManagerProvider";
import {useCookies} from "react-cookie";


interface VideoLinkProps {
  video: Video,
  isMobile?: boolean
}

export default function VideoLink (props: VideoLinkProps): JSX.Element{

  const { number, link, title, author } = props.video;
  const { isMobile } = props;
  const classes = useStyles();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { enqueueSnackbar } = useSnackbar();
  const serverManager = useServerManager();
  const [voting, setVoting] = useState<boolean>(false);
  const [cookies, setCookie] = useCookies();


  const handleVote = () => {
    setVoting(true);
    serverManager
      .voteByItem(number, "default")
      .then((response) => {
        const { data } = response;
        enqueueSnackbar(`¡Gracias por votar en !`, {
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

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isModalOpen}>
          <div className={classes.paper}>
            <IconButton
              onClick={()=> setIsModalOpen(false)}
              className={classes.closeButton}
            >
              <Icon>
                <CloseIcon/>
              </Icon>
            </IconButton>
            <iframe
              width="853"
              height="480"
              src={`https://www.youtube.com/embed/${link?.split("https://youtu.be/")[1]}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={title}
            />
          </div>
        </Fade>
      </Modal>
      <Grid item xs={2} className={clsx({
        [classes.gridLink]: !isMobile,
        [classes.gridMobileLink]: isMobile
      })}>
        <div className={classes.background}>
          <div
            onClick={() => setIsModalOpen(true)}
            className={classes.videoLink}
          >
            <Image
              src={getVideoImageURL(link)}
              height={80}
              width={80}
              className={classes.imageLink}
            />
            <p className={classes.textLink}>
              {number}
              <br/>
              {author}
              <br/>
              {title}
            </p>
          </div>
          <Tooltip title={"Votar por este video"} style={{alignSelf:"flex-start"}}>
            <IconButton
              color={"inherit"}
              onClick={handleVote}
            >
              <Icon>
                <HowToVoteIcon style={{color: "white"}}/>
              </Icon>
            </IconButton>
          </Tooltip>
        </div>
      </Grid>
    </>
  );
}
