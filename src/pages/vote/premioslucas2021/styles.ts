import {makeStyles, Theme} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    backgroundColor: "black",
    color: "white",
    //height: "100vh",
    overflow: "hidden",
  },
  grid: {
    padding: "10px",
    width: "100%",
    height: "min-content",
    overflow: "hidden",
    //zIndex: 1400
  },
  image1: {
    backgroundImage: "url(\"/images/lucas_2021_ps.png\")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    zIndex: 0,
    height:"100%",
    width:"100%",
    position: "fixed",
  },
  input: {
    backgroundColor: "rgba(255,255,255, 0.2)",
    color: "white"
  },
  textField: {
    marginRight: "30px",
  },
  textFieldContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  verticalContainer: {
    //height:"calc(100vh - 4em)",
    marginTop: "4em",
    display:"flex",
    flexDirection:"column",
  },
  title: {
    marginBottom: 0,
    fontSize: "xx-large"
  },
  subtitle: {
    marginTop: 0,
    fontStyle: "italic",
    opacity: 0.8,
    fontSize: "large"
  },
  horizontalContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%"
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  closeButton: {
    alignSelf: "flex-end",
    zIndex: 101,
    color: "black"
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 1, 1),
  },
  iframeResponsive: {
    width: "75vw",
    height: "calc(75vw * 0.5625)"
  },
  fab: {
    position: "fixed",
    bottom: "2em",
    right: "2em",
    zIndex: 1000,
    transition: "all 0.4s ease 0s",
  },
}));

export default useStyles;
