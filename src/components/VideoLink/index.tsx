import React, {useState} from "react";
import {Icon, IconButton, Grid, Tooltip, Typography, Fade, Modal, Backdrop} from "@material-ui/core";
import { HowToVote as HowToVoteIcon, Close as CloseIcon } from "@material-ui/icons";
import Image from "next/image";
import {getVideoImageURL} from "../../utils/YoutubeUtils";
import Video from "../../types/Video";
import {useSnackbar} from "notistack";
import useStyles from "./styles";


interface VideoLinkProps {
  video: Video,
}

export default function VideoLink (props: VideoLinkProps): JSX.Element{

  const { number, link, title, author } = props.video;
  const classes = useStyles();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { enqueueSnackbar } = useSnackbar();

  const handleVote = () => {
    enqueueSnackbar(`Usted ha votado por ${title}`, {variant:"success" });
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
      <Grid item xs={2} className={classes.gridLink}>
        <div className={classes.background}>
          <Typography
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
          </Typography>
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
