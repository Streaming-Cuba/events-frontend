import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
  },
  title: {
    fontSize: "3rem",
    lineHeight: "1.3",

    [theme.breakpoints.down('sm')]: {
      fontSize: "1.8rem",
    }
  },
  separate: {
    alignItems: 'center',
    display: 'flex',
    margin: '40px auto 0',
    justifyContent: 'center',

    '&::before': {
      content: '""',
      display: 'block',
      height: '1px',
      width: '125px',
      background: theme.palette.primary.light,
      opacity: '.15',
    },
    '&::after': {
      content: '""',
      display: 'block',
      height: '1px',
      width: '125px',
      background: theme.palette.primary.light,
      opacity: '.15',
    },
    '& > svg': {
      margin: '0 20px',
      width: '23px',
      height: 'auto',
      opacity: '.50',
      color: theme.palette.primary.light,
    },
  },
  text: {
    marginTop: '40px',
    opacity: .8,
    fontSize: '1.077rem',
  }
}));

export default useStyles;
