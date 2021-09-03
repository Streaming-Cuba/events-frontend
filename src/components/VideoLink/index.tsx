import React from "react";
import {Icon, IconButton, Grid, Link, makeStyles, Tooltip} from "@material-ui/core";
import { HowToVote as HowToVoteIcon} from "@material-ui/icons";
import Image from "next/image";
import {getVideoImageURL} from "../../utils/YoutubeUtils";
import Video from "../../types/Video";
import {grey} from "@material-ui/core/colors";
import {useSnackbar} from "notistack";

const useStyles = makeStyles(()=> ({
  gridLink: {
    color: "white",
    maxWidth: "30em",
    marginBottom: "-2em"
  },
  videoLink: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-strat",
    padding: "5px",
    color: "black",
    textDecoration: "none!important",
  },
  background: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(30, 30, 30, 0.7)",
    borderRadius: "5px",
    height: "80%",
    justifyContent: "space-between"
  },
  textLink: {
    marginLeft: "5px",
    color: "white!important",
    fontWeight: 500,
  },
  imageLink: {
    borderRadius: "5px"
  },
  checkLink: {
    padding: 0,
    paddingLeft: "1px",
    color: `${grey[100]}!important`,
    "&$checked": {
      color: `${grey[400]}!important`,
    },
  }
}));

interface VideoLinkProps {
  video: Video,
}

export default function VideoLink (props: VideoLinkProps): JSX.Element{

  const { number, link, title, author } = props.video;
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  return (
    <Grid item xs={6} className={classes.gridLink}>
      <div className={classes.background}>
        <Link
          className={classes.videoLink}
          href={link}
          rel="noopener noreferrer"
          target="_blank"
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
        </Link>
        <Tooltip title={"Votar por este video"} style={{alignSelf:"flex-start"}}>
          <IconButton>
            <Icon>
              <HowToVoteIcon style={{color: "white"}}/>
            </Icon>
          </IconButton>
        </Tooltip>
      </div>
    </Grid>
  );
}
