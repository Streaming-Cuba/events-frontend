import React, { useMemo } from "react";

import {
  Container,
  GridList,
  GridListTile,
  makeStyles,
  Theme,
  useMediaQuery,
} from "@material-ui/core";
import {} from "@material-ui/styles";
import clsx from "clsx";
import { NextSeo } from "next-seo";
import Carousel from "../components/Carousel";
import EmptySpace from "../components/EmptySpace";
import Separator from "../components/Separator";
import EventCard from "../components/EventCard";

function IndexPage() {
  const classes = useStyles();

  const sm = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const md = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
  const lg = useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"));

  const cols = useMemo(() => {
    if (sm) return 1;
    if (md) return 2;
    if (lg) return 3;
    return 4;
  }, [sm, md, lg]);

  return (
    <>
      <NextSeo title="Eventos" description="Eventos de StreamingCuba" />
      <div style={{ overflowX: "hidden" }}>
        <section className={classes.homeSection}>
          <Carousel />
        </section>

        <EmptySpace />
        <Separator title="Próximos eventos">
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
          tempor.
        </Separator>

        <EmptySpace />
        <section className={classes.section}>
          <GridList cellHeight="auto" cols={cols}>
            <GridListTile>
              <EventCard />
            </GridListTile>
            <GridListTile>
              <EventCard />
            </GridListTile>
            <GridListTile>
              <EventCard />
            </GridListTile>
            <GridListTile>
              <EventCard />
            </GridListTile>
            <GridListTile>
              <EventCard />
            </GridListTile>
          </GridList>
        </section>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  homeSection: {
    position: "relative",
  },
  carouselContainer: {
    maxWidth: "100vw",
    minHeight: "100vh",
    padding: 0,
    backgroundColor: "#614da7",

    alignContent: "center",
    boxSizing: "border-box",
    display: "flex",
    flexWrap: "wrap",
  },
  section: {
    marginLeft: "10px",
    marginRight: "10px",
  },
}));

export default IndexPage;
