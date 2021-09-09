import {
  GridList,
  GridListTile,
  makeStyles,
  Theme,
  useMediaQuery,
} from "@material-ui/core";
import React, { useMemo } from "react";
import EmptySpace from "../../components/EmptySpace";
import EventCard from "../../components/EventCard";
import TitleBar from "../../components/TitleBar";
import {InferGetServerSidePropsType} from "next";
import Event from "../../types/Event";

function Events(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
): JSX.Element {
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

  const { events } = props;

  return (
    <div>
      <TitleBar/>
      <section className={classes.section}>
        <GridList cellHeight="auto" cols={cols}>
          {
            events
              .map((item, index) => (
                <GridListTile key={index}>
                  <EventCard event={item as Event}/>
                </GridListTile>
              ))
          }
        </GridList>
      </section>

      <EmptySpace/>
    </div>
  );
}

const useStyles = makeStyles(() => ({
  section: {
    marginLeft: "10px",
    marginRight: "10px",
  },
}));

export default Events;

export async function getServerSideProps(context) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/event`);
  const data = await res.json();

  return {
    props: {
      events: data || [],
    },
  };
}
