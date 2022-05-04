import React, { useMemo } from "react";

import {
  GridList,
  GridListTile,
  makeStyles,
  Theme,
  useMediaQuery,
} from "@material-ui/core";
import {} from "@material-ui/styles";
import Carousel from "../components/Carousel";
import EmptySpace from "../components/EmptySpace";
import Separator from "../components/Separator";
import EventCard from "../components/EventCard";
import { InferGetServerSidePropsType } from "next";
import Event from "../types/Event";

function IndexPage(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
): JSX.Element {
  const classes = useStyles();

  const { carouselItems } = props;

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
      <div >
        <section className={classes.homeSection}>
          <Carousel items={carouselItems} />
        </section>

        <EmptySpace />
        <Separator
          title="Próximos eventos"
          text="Actualmente no tenemos más eventos planificados. Cuando planifiquemos nuevos eventos estarán disponibles acá."
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
        </Separator>

        <EmptySpace />
        <section className={classes.section}>
          <GridList cellHeight="auto" cols={cols}>
            {
              carouselItems
                .filter(item => item.statusId && (item.statusId === 1 || item.statusId === 2))
                .map((item, index) => (
                  <GridListTile key={index}>
                    <EventCard event={item as Event}/>
                  </GridListTile>
                ))
            }
            {
              /*
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
                */
            }
          </GridList>
        </section>
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

export async function getServerSideProps(context) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/event`);
  const data = await res.json();

  return {
    props: {
      carouselItems: data || [],
    },
  };
}
