import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  inner: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: "7px 7px 30px 7px",
    maxWidth: "350px",
    minWidth: "316px",
    minHeight: "400px",
  },
  grow: {
    flexGrow: 1,
  },
  content: {},
  image: {
    position: "relative",
    marginBottom: "10px",
    borderRadius: "5px 0 0 5px",

    "&:hover $img": {
      transform: "scale(1.04)",
    },
    "&:hover $status": {
      transform: "scale(1.04)",
    },
  },
  img: {
    display: "block",
    width: "100%",
    minWidth: "316px",
    maxHeight: "220px",
    marginLeft: "auto",
    marginRight: "auto",
    transform: "initial",
    transition: "all 0.5s ease-in-out",
    objectFit: "contain",
  },
  status: {
    color: theme.palette.primary.main,
    position: "absolute",
    zIndex: 1,
    bottom: "10px",
    left: "20px",
    fontSize: ".8rem",
    textTransform: "uppercase",
    listStyle: "none",
    margin: 0,
    background: "#fff",
    padding: "5px 15px",
    borderRadius: "25px",
    fontWeight: 700,
    transform: "initial",
    transition: "all 0.5s ease-in-out",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",


    color: theme.palette.primary.main,
    textAlign: "center",
    fontSize: "1rem",
    fontWeight: 600,
    lineHeight: 1.4,
    marginBottom: "5px",
    minHeight: "44px",
  },
  subtitle: {
    color: theme.palette.primary.light,
    textAlign: "center",
    fontSize: "0.85rem",
    fontWeight: 500,
    marginBottom: "1px",
  },
  alterSubtitle: {
    fontStyle: "italic",
    fontWeight: 600,
  },
  details: {
    margin: "-5px -10px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  },
  text: {
    marginTop: "20px",
    fontSize: ".9231rem",
    color: "#777",
  },
  
  actions: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  action: {
    margin: "0 5px",
  },
}));

export default useStyles;
