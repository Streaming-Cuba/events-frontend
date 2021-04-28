import useStyles from "./styles";

function EmptySpace(props: EmptySpaceProps) {
  const classes = useStyles();

  const size = props.size ? props.size * 50 : 50;

  return <div className={classes.root} style={{ height: size }} />;
}

interface EmptySpaceProps {
  size?: number;
}

export default EmptySpace;
