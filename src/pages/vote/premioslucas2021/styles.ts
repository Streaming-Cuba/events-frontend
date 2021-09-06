import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: "black",
    color: "white",
    height: "100vh",
    overflow: "hidden",
  },
  grid: {
    paddingLeft: "10px",
    paddingRight: "5px",
    paddingBottom:"50px",
    width: "100%",
    //height: "100vh",
    overflow: "auto",
    //zIndex: 1400
  },
  image1: {
    backgroundImage: "url(\"/images/loslucas_background_1.jpg\")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    zIndex: 0,
    height:"100%",
    width:"100%",
    position: "absolute",
  },
  image2: {
    backgroundImage: "url(\"/images/loslucas_background_2.jpg\")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    zIndex: 0,
    height:"100%",
    width:"100%",
    position: "absolute"
  },
  image3: {
    backgroundImage: "url(\"/images/loslucas_background_3.jpg\")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    zIndex: 0,
    height:"100%",
    width:"100%",
    position: "absolute"
  },
  input: {
    color: "white"
  },
  textField: {
    marginRight: "30px",
  },
  verticalContainer: {
    height:"calc(100vh - 4em)",
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
