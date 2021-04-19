import React from "react";

import {
  Container,
  GridList,
  GridListTile,
  makeStyles,
} from "@material-ui/core";
import clsx from "clsx";
import { NextSeo } from "next-seo";
import Carousel from "../components/Carousel";
import EmptySpace from "../components/EmptySpace";
import Separator from "../components/Separator";
import EventCard from "../components/EventCard";

function IndexPage() {
  const classes = useStyles();

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
          <GridList cellHeight="auto" cols={3}>
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
    marginRight: "10px"
  }
}));

export default IndexPage;
