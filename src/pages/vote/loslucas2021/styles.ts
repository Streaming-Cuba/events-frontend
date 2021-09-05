import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: "black",
    paddingBottom: "4em",
    color: "white",
    minHeight: "100vh",
    height: "min-content",
  },
  horizontalContainer: {
    paddingTop:"8em",
    overflow: "unset!important" as "unset",
    position: "absolute!important" as "absolute",
    height: "min-content!important" as "min-content",
    marginLeft: "10px",
    marginRight: "10px",
  },
  horizontalScroll: {
    //minWidth: "1380em",
    height: "calc(100vh - 8em)",
    width: "calc(400 * ((100vh - 8em) / 11))",
    // height: "min-content!important" as "min-content",
    marginTop: "10px",
    marginBottom: "10px",
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
  }
}));

export default useStyles;
