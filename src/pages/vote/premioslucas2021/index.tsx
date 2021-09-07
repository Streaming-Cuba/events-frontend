import React, {ChangeEvent, useState} from "react";
import {Box, Grid, InputAdornment, TextField, ThemeProvider} from "@material-ui/core";
import {Search as SearchIcon} from "@material-ui/icons"
import VideoLink from "../../../components/VideoLink";
import useSetInterval from "../../../utils/useSetInterval";
import useStyles from "./styles";
import {InferGetServerSidePropsType} from "next";
import axios from "axios";
import Event from "../../../types/Event";
import Video from "../../../types/Video";
import {darkTheme} from "../../../config";
import {useCookies} from "react-cookie";
import CustomFade from "../../../components/CustomFade";

export default function PremiosLucas2021 (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
): JSX.Element{

  const classes = useStyles();
  const { event } = props;
  const [image, setImage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");
  const [cookies,] = useCookies();

  const changeImage = () => {
    if (image > 2)
      setImage(1);
    else
      setImage(prevState => prevState+1);
  };


  useSetInterval(() => changeImage(), 10000);

  return (
    <ThemeProvider theme={darkTheme}>
      <div className={classes.container}>
        <CustomFade inProp={image === 1} duration={1000} maxOpacity={0.7}>
          <div className={classes.image1}/>
        </CustomFade>
        <CustomFade inProp={image === 2} duration={1000} maxOpacity={0.7}>
          <div className={classes.image2}/>
        </CustomFade>
        <CustomFade inProp={image === 3} duration={1000} maxOpacity={0.7}>
          <div className={classes.image3}/>
        </CustomFade>
        <Box className={classes.verticalContainer}>
          <Box className={classes.grid}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={12} md={6} xl={6} style={{zIndex:100}}>
                <h1>
                  Nominados a los Premios Lucas 2021
                </h1>
              </Grid>
              <Grid item xs={12} sm={12} md={6} xl={6} className={classes.textFieldContainer} >
                <TextField
                  label="Buscar"
                  variant="outlined"
                  color={"secondary"}
                  className={classes.textField}
                  value={search}
                  InputProps={{
                    className: classes.input,
                    startAdornment: <InputAdornment position={"start"}><SearchIcon/></InputAdornment>
                  }}
                  onChange={(e:ChangeEvent<HTMLTextAreaElement>) => setSearch(e.target.value)}
                />
              </Grid>
            </Grid>
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
                      video.Title?.toLowerCase().includes(search.toLowerCase()) ||
                          video.Author?.toLowerCase().includes(search.toLowerCase()) ||
                          video.Number?.toString().toLowerCase().includes(search.toLowerCase())
                  )
                  .map((video, index) => <VideoLink video={video as Video} key={index} cookies={cookies}/>)
              }
            </Grid>
          </Box>
        </Box>
      </div>
    </ThemeProvider>
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

