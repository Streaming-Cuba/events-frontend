import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  carouselContainer: {
    maxWidth: "100vw",
    minHeight: "100vh",
    padding: 0,

    alignContent: "center",
    boxSizing: "border-box",
    display: "flex",
    flexWrap: "wrap",
  },
  carouselSwapper: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 1,
    display: "flex",
    transitionProperty: "transform",
    boxSizing: "content-box",

    marginLeft: "auto",
    marginRight: "auto",

    overflow: "hidden",
    listStyle: "none",
    padding: 0,
  },
  carouselItem: {
    backgroundColor: "#000",
    display: "flex",
    alignItems: "center",

    width: "100%",
    height: "100%",
    position: "absolute",

    transition: "all 3s cubic-bezier(0, 0, 0.2, 1) 0s",
  },
  carouselBackground: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  carouselImage: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  },
  carouselItemOpacity: {
    display: "block",
    position: "absolute",
    width: "100%",
    height: "100%",
    background: "#000",
    opacity: 0.3,
    left: 0,
    top: 0,
  },
  carouselItemContent: {
    maxWidth: "900px",
    margin: "5em auto",
    textAlign: "center",
    position: "relative",
    zIndex: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    height: "-webkit-fill-available",
    marginBottom: "5%",
  },
  title: {
    fontSize: "4rem",
    lineHeight: 1.4,
    fontWeight: 700,
    color: "#fff",

    userSelect: "none",

    [theme.breakpoints.down("sm")]: {
      fontSize: "2.9rem",
    },
  },
  subtitle: {
    fontSize: "2rem",
    fontStyle: "italic",
    fontWeight: 700,
    userSelect: "none",
    color: "#fff",
    marginBottom: "15px",

    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
  categories: {
    display: "none",
    marginBottom: "20px",
  },
  category: {
    color: theme.palette.primary.dark,
    backgroundColor: "white",
  },
  actions: {
    //marginTop: "15em",
  },
  pagination: {
    position: "absolute",
    textAlign: "center",
    transition: ".3s opacity",
    zIndex: 10,

    bottom: "1%",
    width: "100%",
    top: "auto",
  },
  bullet: {
    width: "13px",
    height: "13px",
    background: "0 0",
    border: "1px solid #fff",
    borderRadius: "50%",
    opacity: 1,
    outline: 0,
    margin: "0 10px 0 0",
    display: "inline-block",

    transition: "all .2s",

    cursor: "pointer"
  },
  bulletActive: {
    background: "#fff",
  },
}));

export default useStyles;
