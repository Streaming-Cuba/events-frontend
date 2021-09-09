import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  inner: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "30px"
  },
  root: {
    maxWidth: "400px",
  },
  image: {
    position: "relative",
    marginBottom: "20px",
  },
  img: {
    width: '100%',
    maxWidth: "400px",
    maxHeight: "245px",
    display: "block",
    borderRadius: "5px",
  },
  status: {
    position: "absolute",
    zIndex: 1,
    bottom: "20px",
    left: "20px",
    fontSize: ".9231rem",
    textTransform: "uppercase",
    listStyle: "none",
    margin: 0,
    background: "#fff",
    padding: "7px 20px",
    borderRadius: "25px",
    fontWeight: 500,
  },
  title: {
    fontSize: "1.462rem",
    lineHeight: 1.4,
    fontWeight: 700,
    marginBottom: "15px",
    "&:hover": {
      cursor: "pointer"
    },
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
}));

export default useStyles;
