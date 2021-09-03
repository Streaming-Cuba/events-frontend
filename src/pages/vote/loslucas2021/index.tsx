import React, {useEffect, useState} from "react";
import {Fade, Grid, List} from "@material-ui/core";
import Video from "../../../types/Video";
import VideoLink from "../../../components/VideoLink";
import {useDispatch} from "react-redux";
import { clearAllVideos } from "../../../apis/redux/reducers/votes";
import videos from "../../../data/videos.json";
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

  useSetInterval(() => changeImage(), 10000);

  return (
    <div>
      {
        isMobile? (
          <List className={classes.container}>
            <div style={{
              backgroundImage: "url(\"/images/loslucas_background_1.jpg\")",
              backgroundPosition: "center",
              backgroundSize: "cover",
              zIndex: -1,
              height:"100vh",
              width:"100%",
              position: "fixed"
            }}/>
            {
              videos.map((video, index) => <VideoLink isMobile video={video as Video} key={index}/>)
            }
          </List>
        ) : (
          <>
            <div className={classes.container}>
              <Fade in={image === 1} timeout={1000}>
                <div className={classes.image1}/>
              </Fade>
              <Fade in={image === 2} timeout={1000}>
                <div className={classes.image2}/>
              </Fade>
              <Fade in={image === 3} timeout={1000}>
                <div className={classes.image3}/>
              </Fade>
              <h1
                style={{
                  zIndex:1200,
                  position:"absolute",
                  marginTop: "3em"
                }}>Nominados a los Premios Lucas 2021</h1>
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
            </div>
          </>
        )
      }
    </div>
  );
}
