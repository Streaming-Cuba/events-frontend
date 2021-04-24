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

function Events() {
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
    <div>
      <TitleBar></TitleBar>

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
