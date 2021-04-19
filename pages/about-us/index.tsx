import React from "react";
import { Theme, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Link from "../../components/Link";
import TitleBar from "../../components/TitleBar";
import EmptySpace from "../../components/EmptySpace";
import Separator from "../../components/Separator";
function AboutUs() {
  const classes = useStyles();

  return (
    <div>
      <TitleBar title="Acerca de nosotros">
        <Link href="/" color="inherit">
          Inicio
        </Link>
        <Typography color="inherit">Acerca de</Typography>
      </TitleBar>

      <div className={classes.container}>
        <div className={classes.textContainer}>
          <div className={classes.title}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et
            ultrices massa, sed porta dui.{" "}
            <span>
              Consetetur omittantur consequuntur eos et. Eleifend praesent
              iudicabit no mea tollit persequeris ex pri.
            </span>
          </div>

          <Separator>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line>
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
              <line x1="12" y1="22.08" x2="12" y2="12"></line>
            </svg>
          </Separator>

          <div className={classes.text}>
            Lorem ipsum dolor sit amet, voluptua iracundia disputationi an pri,
            his utinam principes dignissim ad. Ne nec dolore oblique nusquam, cu
            luptatum volutpat delicatissimi has. Sed ad dicam platonem, mea eros
            illum elitr id, ei has similique constituto. Ea movet saperet
            rationibus sit, pri autem aliquip invidunt an. Consetetur omittantur
            consequuntur eos et. Eleifend praesent iudicabit no mea, tollit
            persequeris ex pri, tota splendide voluptaria in pri. Ad per tale
            aliquip, ei sit viris commune albucius. Eos aliquip scaevola ut, eum
            alii mentitum prodesset no.
          </div>
        </div>

        <EmptySpace />
      </div>
    </div>
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

    "& > h1": {
      margin: 0,
      color: "#fff",
      fontSize: "3rem",
      fontWeight: 600,
      wordBreak: "break-word",
    },
  },
  textContainer: {
    textAlign: "center",
    padding: "0 20px",
  },
  title: {
    fontSize: "2.4rem",
    lineHeight: 1.3,

    "& > span": {
      color: theme.palette.primary.light,
    },
  },
  text: {
    marginTop: "40px",
    opacity: 0.8,
    fontSize: "1.077rem",
  },
}));

export default AboutUs;
