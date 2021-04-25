import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "30px",
  },
  root: {
    maxWidth: "400px",
  },
  image: {
    position: "relative", 
    paddingTop: "5px",
    marginBottom: "12px",
    borderRadius: "5px",

    "&:hover $img": {
      transform: "scale(1.04)",
    },
  },
  img: {
    display: "block",
    width: "100%",
    maxHeight: "220px",
    maxWidth: "270px",    
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: "5px",
    transform: "initial",
    transition: "all 0.5s ease-in-out",
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
    color: theme.palette.primary.main,
    textAlign: "center",
    fontSize: "1.1rem",
    fontWeight: 700,
    lineHeight: 1.4,
    marginBottom: "15px",
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
