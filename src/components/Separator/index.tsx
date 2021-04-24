import useStyles from "./styles";

function Separator(props: SeparatorProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.title}>{props.title}</div>
      <div className={classes.separate}>
        {props.children}
      </div>
      <div className={classes.text}>{props.text}</div>
    </div>
  );
}

interface SeparatorProps {
  children?: string | JSX.Element;
  title?: string;
  text?: string;
}

export default Separator;
