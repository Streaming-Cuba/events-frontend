import { Button, makeStyles } from "@material-ui/core";
import { useRouter } from "next/router";

function OutlinedButton(props: { children: React.ReactNode; href?: string }) {
  const classes = useStyles();
  const router = useRouter();

  const onClick = () => {
    if (props.href) return router.push(props.href);
  };

  return (
    <Button className={classes.root} onClick={onClick}>
      {props.children}
    </Button>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    background: "rgba(0,0,0,0.5)",
    border: "2px solid #fff",
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: 500,
    padding: "11px 40px",
    display: "inline-block",
    borderRadius: "25px",
    margin: "10px",

    "&:hover": {
      background: "rgba(0,0,0,0.9)",
    },
  },
}));

export default OutlinedButton;
