import React from "react";
import { useScrollTrigger } from "@material-ui/core";
import clsx from "clsx";

interface Props {
  children: React.ReactElement;
  onTriggerClassName?: string;
  className?: string;
}

function ElevationScroll(props: Props): JSX.Element {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    className: trigger
      ? clsx(props.className, props.onTriggerClassName)
      : props.className,
  });
}

export default ElevationScroll;
