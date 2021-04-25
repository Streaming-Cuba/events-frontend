import React, { useEffect, useMemo } from "react";
import clsx from "clsx";
import {
  makeStyles,
  Theme,
  Typography,
  useMediaQuery,
  GridList,
  GridListTile,
} from "@material-ui/core";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import Event from "../../types/Event";

import Link from "../../components/Link";
import TitleBar from "../../components/TitleBar";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { Music as MusicIcon } from "mdi-material-ui";

import axios from "axios";
import EmptySpace from "../../components/EmptySpace";
import Separator from "../../components/Separator";
import VoteCard from "../../components/VoteCard";

function VoteByEvent(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const router = useRouter();

  const { event } = props;

  const classes = useStyles();

  useEffect(() => {
    console.log(event);
  }, []);

  const sm = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const md = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
  const lg = useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"));
  const xl = useMediaQuery((theme: Theme) => theme.breakpoints.down("xl"));

  const cols = useMemo(() => {
    if (sm) return 1;
    if (md) return 2;
    if (lg) return 4;
    if (xl) return 5;
    return 4;
  }, [sm, md, lg]);

  return (
    <>
      <NextSeo
        title={event.name}
        description={event.description}
        openGraph={{
          title: event.name,
          description: "Vote ya en el evento Cubadisco 2021",
          images: [{ url: event.coverPath }],
        }}
      />
      <div>
        <TitleBar title={event.name as string} background={event.coverPath}>
          <Link href="/" color="inherit">
            Inicio
          </Link>
          <Typography color="inherit">Votos</Typography>
          <Typography color="inherit">{event.name}</Typography>
        </TitleBar>

        <div className={classes.container}>
          {event.groups.map((group) => (
            <div key={group.id}>
              <Separator title={group.name} text={group.description}>
                <MusicIcon />
              </Separator>

              <GridList cellHeight="auto" cols={cols}>
                {group.items &&
                  group.items.map((item) => (
                    <GridListTile key={item.id}>
                      <VoteCard title={item.name} coverPath={item.coverPath} />
                    </GridListTile>
                  ))}
              </GridList>
              <EmptySpace />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    position: "relative",
    zIndex: 1,
    width: "100%",
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
    maxWidth: "1300px",

    "& > h1": {
      margin: 0,
      color: "#fff",
      fontSize: "3rem",
      fontWeight: 600,
      wordBreak: "break-word",
    },
  },

  pageContent: {
    width: "100%",
    borderRadius: "5px",
    padding: "30px",
    backgroundColor: "#fff",
    marginBottom: "30px",
  },

  contentHeader: {
    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px",
    margin: "-30px -30px 30px",
    overflow: "hidden",
    position: "relative",
  },
  descriptionContent: {
    fontSize: "14px !important",
    whiteSpace: "break-spaces",
    textAlign: "justify",
  },
  image: {
    verticalAlign: "middle",
    borderStyle: "none",
    maxWidth: "100%",
    height: "auto",
  },
  detailWidget: {
    width: "100%",
    borderRadius: "5px",
    padding: "30px",
    backgroundColor: "#fff",
    marginBottom: "30px",
  },
  widgetTitle: {
    fontSize: "1.231rem",
    marginBottom: "20px",
    fontWeight: 600,
    margin: "-30px -30px 30px",
    borderBottom: "1px solid #eaeaea",
    padding: "30px 30px 25px",
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  reactionsBox: {
    display: "flex",
    margin: "-4px",
  },
  like: {
    display: "block",
    color: "#888",
    textTransform: "uppercase",
    fontSize: ".9230769230769231rem",
    fontWeight: 500,
    margin: "4px",

    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  ul: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  li: {
    display: "flex",
    alignItems: "flex-start",
    marginBottom: "25px",
    borderBottom: "1px solid #eee",
    paddingBottom: "25px",
  },
  detailItemContent: {
    width: "100%",
  },
  detailItemTitle: {
    textTransform: "uppercase",
    marginBottom: "2px",
    fontWeight: 600,
    fontSize: ".7692rem",
    letterSpacing: "1px",
  },
  detailItemInner: {
    fontSize: ".9231rem",
    color: "#888",

    "& > a": {
      color: "inherit",
      textDecoration: "none",
    },
  },
  socialLinks: {},
  icon: {
    fontSize: "1.923rem",
    lineHeight: "1.923rem",
    paddingRight: "25px",
    width: "60px",

    "& > svg": {
      fill: theme.palette.primary.main,
    },
  },
}));

export default VoteByEvent;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const { id } = context.params;
    const eventResponse = await axios.get<Event>(
      `${process.env.API_URL}/event/${id}`
    );

    const event = eventResponse.data;

    return {
      props: {
        event,
      },
    };
  } catch {
    return {
      notFound: true,
      props: {},
    };
  }
}
