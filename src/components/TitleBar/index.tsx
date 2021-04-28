import React, { useMemo } from "react";
import { Breadcrumbs } from "@material-ui/core";
import { NavigateNext as NavigateNextIcon } from "@material-ui/icons";
import useStyles from "./styles";

function TitleBar(props: TitleBarProps) {
  const classes = useStyles();

  const { background } = props;

  const backgroundImage = useMemo(() => {
    if (background) return `url(${background})`;
    return "url(https://res.cloudinary.com/streaming-cuba/image/upload/v1618700290/breadcrumbs-bg_si63ie.webp)";
  }, [background]);

  return (
    <div className={classes.titleBar}>
      <div className={classes.titleBackground} style={{ backgroundImage }} />
      <div className={classes.container}>
        {props.title && <h1>{props.title}</h1>}
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
  background?: string;
}

export default TitleBar;
