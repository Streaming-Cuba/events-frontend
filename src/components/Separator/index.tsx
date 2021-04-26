import useStyles from "./styles";

function Separator(props: SeparatorProps) {
  const classes = useStyles();

  const innerMarginSize = props.innerMarginSize || "small";

  const marginTop = innerMarginSize === "small" ? 10 : 40;

  return (
    <div className={classes.root}>
      <div className={classes.title}>{props.title}</div>
      <div className={classes.separate} style={{ marginTop }}>
        {props.children}
      </div>
      {props.text && <div className={classes.text}>{props.text}</div>}
    </div>
  );
}

interface SeparatorProps {
  children?: string | JSX.Element;
  title?: string;
  text?: string;
  innerMarginSize?: "small" | "normal";
}

export default Separator;
