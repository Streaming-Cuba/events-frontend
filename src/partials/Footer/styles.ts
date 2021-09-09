import { makeStyles, Theme } from "@material-ui/core";

export default makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: "#121219",
    backgroundImage: "url(/images/footer-bg.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
    position: "absolute",
  },
  container: {
    width: "100%",
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
  },
  content: {
    padding: "120px 20px",

    [theme.breakpoints.down("sm")]: {
      padding: "80px 20px",
    },
  },
  wrapper: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  title: {
    fontSize: "1.385rem",
    marginBottom: "25px",
    textTransform: "uppercase",
    fontWeight: 700,

    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      marginTop: "20px",
    },
  },
  item: {
    marginBottom: "13px",
    alignItems: "center",
    display: "flex",

    "& > svg": {
      marginRight: "12px",
    },

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  },
  socials: {
    color: "white",
    marginTop: "20px",

    "& > a": {
      marginRight: "15px",
    },

    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center",
    },
  },
  copyright: {
    borderTop: "1px solid rgba(255,255,255,.1)",
    padding: "15px 0",
  },
  copyrightContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  },
  logo: {
    color: "white",
    textDecoration: "none",
    fontSize: "1.2rem",
  },
}));
