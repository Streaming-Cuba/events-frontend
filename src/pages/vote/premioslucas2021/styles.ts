import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(() => ({
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
  horizontalContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%"
  },
}));

export default useStyles;
