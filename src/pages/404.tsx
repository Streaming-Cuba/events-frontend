import React from "react";
import { makeStyles } from "@material-ui/core";
import { Warning } from "@material-ui/icons";
import { NextSeo } from "next-seo";

function Custom404(): JSX.Element {
  const classes = useStyles();

  return (
    <>
      <NextSeo title="Página no encontrada" />
      <div className={classes.page404Container}>
        <div className={classes.container}>
          <div className={classes.alignCenter}>
            <div className={classes.title}>
              Error <span>404</span>
            </div>
            <div className={classes.separate}>
              <Warning />
            </div>
            <div className={classes.text}>
              El recurso solicitado no existe
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  page404Container: {
    padding: "60px 0",
    minHeight: "40vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width: "100%",
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
  },
  alignCenter: {
    textAlign: "center",
  },
  title: {
    fontSize: "3.231rem",
    lineHeight: 1.3,

    "& > span": {
      color: theme.palette.primary.light,
    },
  },
  separate: {
    alignItems: "center",
    display: "flex",
    margin: "40px auto 0",
    justifyContent: "center",

    "&::before": {
      content: "\"\"",
      display: "block",
      height: "1px",
      width: "125px",
      background: theme.palette.primary.light,
      opacity: ".15",
    },
    "&::after": {
      content: "\"\"",
      display: "block",
      height: "1px",
      width: "125px",
      background: theme.palette.primary.light,
      opacity: ".15",
    },
    "& > svg": {
      margin: "0 20px",
      width: "23px",
      height: "auto",
      opacity: ".50",
      color: theme.palette.primary.light,
    },
  },
  text: {
    marginTop: "40px",
    opacity: 0.8,
    fontSize: "1.077rem",
  },
}));

export default Custom404;
