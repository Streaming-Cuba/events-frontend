import React, {useEffect, useState} from "react";
import {Icon, IconButton, Grid, Tooltip, CircularProgress} from "@material-ui/core";
import { HowToVote as HowToVoteIcon, Done as DoneIcon, BrokenImage as BrokenImageIcon } from "@material-ui/icons";
import Image from "next/image";
import {getVideoImageURL} from "../../utils/YoutubeUtils";
import Video from "../../types/Video";
import useStyles from "./styles";
import clsx from "clsx";

interface VideoLinkProps {
  video: Video,
  cookies: {[key: string]: string},
  openVideo: (video: Video) => void,
  startVote: (video: Video) => void,
  voting: number,
  allVotes: boolean
}

export default function VideoLink (props: VideoLinkProps): JSX.Element{

  const { cookies, openVideo, startVote, video, voting, allVotes } = props;
  const { Number, Link, Title, Author, Id } = video;
  const classes = useStyles();
  const [voted, setVoted] = useState<boolean>(false);

  useEffect(() => {
    setVoted(
      Object
        .keys(cookies)
        .some(cookie => cookie.toString().toLowerCase() === `vote/finalistaspremioslucas2021/${Id}`.toLowerCase()));
  }, [props]);

  return (
    <Grid item xs={12} sm={4} md={3} xl={2} className={classes.gridLink}>
      <div className={clsx({
        [classes.background]: true,
        [classes.greenBackground]: voted,
        [classes.blackBackground]: !voted,
      })}>
        <div
          onClick={() => openVideo(video)}
          className={classes.videoLink}
        >
          {
            Link !== null? (
              <Image
                src={getVideoImageURL(Link)}
                height={80}
                width={80}
                className={classes.imageLink}
              />
            ):(
              <Icon className={classes.imageLink}>
                <BrokenImageIcon className={classes.iconLink} color={"secondary"}/>
              </Icon>
            )
          }
          <div className={classes.divText}>
            <p className={classes.textLink}>
              {Number}
            </p>
            <p className={classes.textLink}>
              {Author}
            </p>
            <p className={classes.textLink}>
              {Title}
            </p>
          </div>
        </div>
        <div className={classes.voteArea}>
          {
            voted ? (
              <Icon>
                <DoneIcon/>
              </Icon>
            ) : allVotes ? null : voting === Id? (
              <CircularProgress/>
            ) : (
              <Tooltip title={"Vota por este video aquí"}>
                <IconButton
                  disabled={voting === Id}
                  onClick={() => startVote(video)}
                  className={classes.voteButton}
                >
                  <HowToVoteIcon />
                </IconButton>
              </Tooltip>
            )
          }
        </div>
      </div>
    </Grid>
  );
}
