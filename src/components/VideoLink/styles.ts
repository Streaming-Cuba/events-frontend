import {makeStyles, Theme} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme)=> ({
  gridLink: {
    color: "white",
    width: "31em",
    marginBottom: "5px",
    height: "8.5em",
    zIndex: 101,
  },
  videoLink: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
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
    borderRadius: "5px",
    height: "100%",
    justifyContent: "space-between",
    zIndex: 101
  },
  blackBackground: {
    backgroundColor: "rgba(30, 30, 30, 0.7)",
  },
  greenBackground: {
    backgroundColor: "rgba(114,196,114,0.5)"
  },
  divText: {
    wrap:"nowrap",
    maxWidth: "60%",
    marginLeft: "5px",
  },
  textLink: {
    color: "white!important",
    fontWeight: 500,
    zIndex: 101,
    marginTop: 0,
    marginBottom: 0
  },
  imageLink: {
    borderRadius: "5px",
    zIndex: 101,
    height: "80px",
    width: "80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  iconLink: {
    fontSize: "80px"
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 1, 1),
  },
  recaptchaDialog: {
    padding: "5px!important"
  },
  iframeResponsive: {
    width: "75vw",
    height: "calc(75vw * 0.5625)"
  },
  voteButton: {
    color: "white",
    backgroundColor: "transparent",
  },
  voteArea: {
    minWidth: "3em",
    display: "flex",
  },
}));
export default useStyles;
