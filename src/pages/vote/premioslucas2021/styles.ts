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
    backgroundImage: "url(\"/images/loslucas_background_1.jpg\")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    zIndex: 0,
    height:"100%",
    width:"100%",
    position: "fixed",
  },
  image2: {
    backgroundImage: "url(\"/images/loslucas_background_2.jpg\")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    zIndex: 0,
    height:"100%",
    width:"100%",
    position: "fixed"
  },
  image3: {
    backgroundImage: "url(\"/images/loslucas_background_3.jpg\")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    zIndex: 0,
    height:"100%",
    width:"100%",
    position: "fixed"
  },
  input: {
    backgroundColor: "rgba(255,255,255, 0.5)",
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
    marginBottom: 0
  },
  subtitle: {
    marginTop: 0,
    fontStyle: "italic",
    opacity: 0.8,
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
}));

export default useStyles;
