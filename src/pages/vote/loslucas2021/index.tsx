import React, {useEffect, useState} from "react";
import {Grid, makeStyles} from "@material-ui/core";
import Video from "../../../types/Video";
import VideoLink from "../../../components/VideoLink";
import {useDispatch} from "react-redux";
import { clearAllVideos } from "../../../apis/redux/reducers/votes";
import videos from "../../../data/videos.json";
import clsx from "clsx";
import useSetInterval from "../../../utils/useSetInterval";

const useStyles = makeStyles(() => ({
  container: {
    paddingTop:"6em",
    paddingBottom: "4em",
    //backgroundImage: "url(\"/images/loslucas_background_1.jpg\"), url(\"/images/loslucas_background_2.jpg\"), url(\"/images/loslucas_background_3.jpg\")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    color: "white",
    zIndex: -1
  },
  horizontalContainer: {
    overflowX: "auto",
    overflowY: "hidden",
    //height:"96vh",
    marginLeft: "10px",
    marginRight: "10px",
  },
  horizontalScroll: {
    minWidth: "1380em",
    marginTop: "10px",
    marginBottom: "10px",
  },
  image1: {
    backgroundImage: "url(\"/images/loslucas_background_1.jpg\")"
  },
  image2: {
    backgroundImage: "url(\"/images/loslucas_background_2.jpg\")"
  },
  image3: {
    backgroundImage: "url(\"/images/loslucas_background_3.jpg\")"
  }
}));

export default function (): JSX.Element{

  const classes = useStyles();
  const dispatch = useDispatch();
  const [image, setImage] = useState<number>(1);

  const changeImage = () => {
    if (image > 2)
      setImage(1);
    else
      setImage(prevState => prevState+1);
  };
  const clearVideos = () => dispatch(clearAllVideos());

  useEffect(()=> (() => {
    clearVideos();
  }),[]);

  useSetInterval(() => changeImage(), 5000);

  return (
    <div
      className={
        clsx({
          [classes.container]: true,
          [classes.image1]: image === 1,
          [classes.image2]: image === 2,
          [classes.image3]: image === 3
        })
      }
    >
      <h1>Nominados a los Premios Lucas 2021</h1>
      <div className={classes.horizontalContainer}>
        <div className={classes.horizontalScroll}>
          <Grid
            direction="row"
            container
            spacing={2}
            wrap={"wrap"}
          >
            {
              videos.map((video, index) => <VideoLink video={video as Video} key={index}/>)
            }
          </Grid>
        </div>
      </div>
    </div>
  );
}
