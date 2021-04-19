import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  titleBar: {
    marginTop: 0,
    background: "#121219",
    position: "relative",
    padding: "120px 0",
    marginBottom: "90px",
  },
  titleBackground: {
    backgroundImage:
      "url(https://res.cloudinary.com/streaming-cuba/image/upload/v1618700290/breadcrumbs-bg_si63ie.webp)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "absolute",
    opacity: 0.4,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
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
  breadcrumbs: {
    color: "#fff",

    "& ol li:last-child": {
      borderBottom: `2px solid ${theme.palette.primary.light}`,
    },
  },
}));

export default useStyles;
