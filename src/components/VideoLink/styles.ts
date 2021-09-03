import {makeStyles, Theme} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme)=> ({
  gridLink: {
    color: "white",
    maxWidth: "30em",
    marginBottom: "5px",
    height: "8em",
    zIndex: 101,
  },
  gridMobileLink: {
    color: "white",
    maxWidth: "28em",
    marginBottom: "5px",
    marginLeft: "5px",
    marginRight: "5px",
    height: "8em",
    zIndex: 101,
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
    },
    zIndex: 101
  },
  background: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(30, 30, 30, 0.7)",
    borderRadius: "5px",
    height: "100%",
    justifyContent: "space-between",
    zIndex: 101
  },
  textLink: {
    marginLeft: "5px",
    color: "white!important",
    fontWeight: 500,
    zIndex: 101
  },
  imageLink: {
    borderRadius: "5px",
    zIndex: 101
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
    alignSelf: "flex-end",
    zIndex: 101
  }
}));

export default useStyles;
