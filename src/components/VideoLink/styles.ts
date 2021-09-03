import {makeStyles, Theme} from "@material-ui/core";
import {grey} from "@material-ui/core/colors";

const useStyles = makeStyles((theme: Theme)=> ({
  gridLink: {
    color: "white",
    maxWidth: "28em",
    marginBottom: "5px",
    marginLeft: "5px",
    marginRight: "5px",
    height: "8em"
  },
  videoLink: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-strat",
    padding: "5px",
    color: "black",
    textDecoration: "none!important",
    "&:hover": {
      cursor: "pointer"
    }
  },
  background: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(30, 30, 30, 0.7)",
    borderRadius: "5px",
    height: "100%",
    justifyContent: "space-between"
  },
  textLink: {
    marginLeft: "5px",
    color: "white!important",
    fontWeight: 500,
  },
  imageLink: {
    borderRadius: "5px"
  },
  checkLink: {
    padding: 0,
    paddingLeft: "1px",
    color: `${grey[100]}!important`,
    "&$checked": {
      color: `${grey[400]}!important`,
    },
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  closeButton: {
    alignSelf: "flex-end"
  }
}));

export default useStyles;
