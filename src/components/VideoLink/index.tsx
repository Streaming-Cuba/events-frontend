import React, {useMemo, useState} from "react";
import {Icon, IconButton, Grid, Fade, Modal, Backdrop, Tooltip} from "@material-ui/core";
import { HowToVote as HowToVoteIcon, Close as CloseIcon, Done as DoneIcon } from "@material-ui/icons";
import Image from "next/image";
import {getVideoImageURL} from "../../utils/YoutubeUtils";
import Video from "../../types/Video";
import {useSnackbar} from "notistack";
import useStyles from "./styles";
import {useServerManager} from "../ServerManagerProvider";
import ReCAPTCHA from "react-google-recaptcha";
import clsx from "clsx";
import {useCookies} from "react-cookie";

interface VideoLinkProps {
  video: Video,
  cookies: {[key: string]: string}
}

export default function VideoLink (props: VideoLinkProps): JSX.Element{

  const { cookies } = props;
  const { Number, Link, Title, Author, Id } = props.video;
  const classes = useStyles();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { enqueueSnackbar } = useSnackbar();
  const serverManager = useServerManager();
  const [voting, setVoting] = useState<boolean>(false);
  const [isReCAPTCHAOpen, setIsReCAPTCHAOpen] = useState<boolean>(false);
  const [,setCookie] = useCookies();


  const voted: boolean = useMemo(() => {
    return  Object
      .keys(cookies)
      .some(cookie => cookie.toString().toLowerCase() === `vote/premioslucas2021/${Id}`.toLowerCase());
  }, [cookies]);

  const allVotes: boolean = useMemo(()=> {
    return  Object
      .keys(cookies)
      .filter(cookie => cookie.toString().toLowerCase().includes("vote/premioslucas2021".toLowerCase()))
      .length >= 10;
  }, [cookies]);

  const handleVote = (token: string) => {
    setVoting(true);
    setIsReCAPTCHAOpen(false);
    serverManager
      .voteByItem(Id, "default", token)
      .then((response) => {
        const { data } = response;
        enqueueSnackbar(`¡Usted ha votado por ${Author} ${Title}!`, {
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
        setVoting(false);
      });
  };



  return (
    <>
      <Modal
        open={isReCAPTCHAOpen}
        className={classes.modal}
        onClose={() => setIsReCAPTCHAOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <ReCAPTCHA
          sitekey={"6LcNay8cAAAAAH43qGJAbO37RjpMDkvxjuZPbPQI"}
          onChange={handleVote}
        />
      </Modal>
      <Modal
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
              className={classes.iframeResponsive}
              src={`https://www.youtube.com/embed/${Link?.split("https://youtu.be/")[1]}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={Title}
            />
          </div>
        </Fade>
      </Modal>
      <Grid item xs={12} sm={4} md={3} xl={2} className={classes.gridLink}>
        <div className={clsx({
          [classes.background]: true,
          [classes.greenBackground]: voted,
          [classes.blackBackground]: !voted,
        })}>
          <div
            onClick={() => setIsModalOpen(true)}
            className={classes.videoLink}
          >
            <Image
              src={getVideoImageURL(Link)}
              height={80}
              width={80}
              className={classes.imageLink}
            />
            <p className={classes.textLink}>
              {Number}
              <br/>
              {Author}
              <br/>
              {Title}
            </p>
          </div>
          {
            voted ? (
              <Icon>
                <DoneIcon/>
              </Icon>
            ) : allVotes ? null : (
              <Tooltip title={"Vota por este video aquí"}>
                <IconButton
                  disabled={voting}
                  onClick={() => setIsReCAPTCHAOpen(true)}
                >
                  <Icon>
                    <HowToVoteIcon />
                  </Icon>
                </IconButton>
              </Tooltip>
            )
          }
        </div>
      </Grid>
    </>
  );
}
