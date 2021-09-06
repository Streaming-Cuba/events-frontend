import React, {ChangeEvent, useState} from "react";
import {Box, Fade, Grid, TextField} from "@material-ui/core";
import VideoLink from "../../../components/VideoLink";
import useSetInterval from "../../../utils/useSetInterval";
import useStyles from "./styles";
import {InferGetServerSidePropsType} from "next";
import axios from "axios";
import Event from "../../../types/Event";
import Video from "../../../types/Video";

export default function PremiosLucas2021 (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
): JSX.Element{

  const classes = useStyles();
  const { event } = props;
  const [image, setImage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");

  const changeImage = () => {
    if (image > 2)
      setImage(1);
    else
      setImage(prevState => prevState+1);
  };


  useSetInterval(() => changeImage(), 10000);

  return (
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
      <Box className={classes.verticalContainer}>
        <Box className={classes.horizontalContainer}>
          <h1 style={{zIndex:100}}>
            Nominados a los Premios Lucas 2021
          </h1>
          <TextField
            label="Buscar"
            variant="outlined"
            color={"secondary"}
            className={classes.textField}
            value={search}
            InputProps={{
              className: classes.input
            }}
            onChange={(e:ChangeEvent<HTMLTextAreaElement>) => setSearch(e.target.value)}
          />
        </Box>
        <Box className={classes.grid}>
          <Grid
            container
            spacing={1}
          >
            {
              event.groups[0].videos
                .filter(
                  video =>
                    video.Title.toLowerCase().includes(search.toLowerCase()) ||
                    //  video.Author.toLowerCase().includes(search.toLowerCase()) ||
                    video.Number.toString().toLowerCase().includes(search.toLowerCase())
                )
                .map((video, index) => <VideoLink video={video as Video} key={index}/>)
            }
          </Grid>
        </Box>
      </Box>
    </div>
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

