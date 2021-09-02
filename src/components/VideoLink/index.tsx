import React from "react";
import {Card, Checkbox, Grid, Link, makeStyles} from "@material-ui/core";
import Image from "next/image";
import {getVideoImageURL} from "../../utils/YoutubeUtils";
import Video from "../../types/Video";
import {grey} from "@material-ui/core/colors";
import {useDispatch} from "react-redux";
import {addVideoToVote, removeVideoFromVotes} from "../../apis/redux/reducers/votes";
import {useTypedSelector} from "../../apis/redux";
import {useSnackbar} from "notistack";

const useStyles = makeStyles(()=> ({
  gridLink: {
    color: "white",
    maxWidth: "30em",
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
    height: "100%"
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

  const { number, link, title } = props.video
  const classes = useStyles();
  const dispatch = useDispatch();
  const selectedVideos = useTypedSelector(state => state.votes.selectedVideos);
  const { enqueueSnackbar } = useSnackbar();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked && selectedVideos.length <= 10)
      dispatch(addVideoToVote(number));
    if (event.target.checked && selectedVideos.length >= 10)
      enqueueSnackbar("No puedes seleccionar mas de 10 videos", {variant: "error"});
    if (!event.target.checked)
      dispatch(removeVideoFromVotes(number));
  };

  return (
    <Grid item xs={6} className={classes.gridLink}>
      <div className={classes.background}>
        <Checkbox
          className={classes.checkLink}
          onChange={handleChange}
          checked={selectedVideos.some(value => value === number)}
        />
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
          <p className={classes.textLink}>{title}</p>
        </Link>
      </div>
    </Grid>
  );
}
