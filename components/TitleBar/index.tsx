import { Breadcrumbs, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import { NavigateNext as NavigateNextIcon } from "@material-ui/icons";
import Link from "../../components/Link";

function TitleBar(props: TitleBarProps) {
  const classes = useStyles();

  return (
    <div className={classes.titleBar}>
      <div className={classes.titleBackground} />
      <div className={classes.container}>
        { props.title && <h1>{props.title}</h1> }
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
          className={classes.breadcrumbs}
          
        >
          {props.children}
        </Breadcrumbs>
      </div>
    </div>
  );
}

interface TitleBarProps {
    title?: string;
    children?: JSX.Element[];
}


export default TitleBar;
