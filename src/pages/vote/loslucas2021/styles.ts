import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  container: {
    paddingTop:"6em",
    paddingBottom: "4em",
    backgroundPosition: "center",
    backgroundSize: "cover",
    color: "white",
    zIndex: -1,
    minHeight: "100vh",
    height: "min-content"
  },
  horizontalContainer: {
    overflow: "unset!important" as "unset",
    position: "absolute!important" as "absolute",
    height: "min-content!important" as "min-content",
    marginLeft: "10px",
    marginRight: "10px",
  },
  horizontalScroll: {
    minWidth: "1380em",
    height: "min-content!important" as "min-content",
    marginTop: "10px",
    marginBottom: "10px",
  },
  image1: {
    backgroundImage: "url(\"/images/loslucas_background_1.jpg\")"
  },
  image2: {
    backgroundImage: "url(\"/images/loslucas_background_2.jpg\")"
  },
  image3: {
    backgroundImage: "url(\"/images/loslucas_background_3.jpg\")"
  }
}));

export default useStyles;
