import React, {useEffect, useMemo, useState} from "react";
import {Grid, List} from "@material-ui/core";
import Video from "../../../types/Video";
import VideoLink from "../../../components/VideoLink";
import {useDispatch} from "react-redux";
import { clearAllVideos } from "../../../apis/redux/reducers/votes";
import videos from "../../../data/videos.json";
import clsx from "clsx";
import useSetInterval from "../../../utils/useSetInterval";
import HorizontalScroll from "react-scroll-horizontal";
import useStyles from "./styles";

export default function LosLucas2021 (): JSX.Element{

  const classes = useStyles();
  const dispatch = useDispatch();
  const [image, setImage] = useState<number>(1);
  const [isMobile, setIsMobile] = useState<boolean>(false);

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

  useEffect(() => {
    const isMobile = ():boolean => {
      const userAgent = window.navigator.userAgent || navigator.vendor;
      const navInfo = window.navigator.appVersion.toLowerCase();
      if (
        /windows phone/i.test(userAgent) ||
          /android/i.test(userAgent) ||
          /iPad|iPhone|iPod/.test(userAgent)
      ) {
        return true;
      }
      else if(
        navInfo.indexOf("win") != -1 ||
          navInfo.indexOf("linux") != -1 ||
          navInfo.indexOf("mac") != -1
      ) {
        return false;
      }
    };
    setIsMobile(isMobile());
  }, []);

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
      {
        isMobile? (
          <List>
            {
              videos.map((video, index) => <VideoLink video={video as Video} key={index}/>)
            }
          </List>
        ) : (
          <HorizontalScroll
            className={classes.horizontalContainer}
            reverseScroll
          >
            <Grid
              className={classes.horizontalScroll}
              direction="row"
              container
              spacing={2}
              wrap={"wrap"}
            >
              {
                videos.map((video, index) => <VideoLink video={video as Video} key={index}/>)
              }
            </Grid>
          </HorizontalScroll>
        )
      }
    </div>
  );
}
