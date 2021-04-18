import { makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) => ({
  appBar: {
    transition: 'all 0.4s ease 0s',
    backgroundColor: 'transparent',
  },
  elevatedAppBar: {
    backgroundColor: 'white',
    color: `${theme.palette.primary.main} !important`,

    "& $menuItem": {
      '& > a': {
        color: theme.palette.primary.main,
      }
    },
    "& $mobileNavigation": {
      color: theme.palette.primary.main,
    },
  },
  toolbar: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  container: {
    width: '100%',
    padding: '10px 20px 10px 20px',
    position: 'relative',
    margin: '0 auto',
    display: 'flex',
  },
  logo: {
    maxWidth: 45,
  },
  columnRoot: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    color: 'white',
  },
  mobileNavigation: {
    display: "none",
    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
  },
  desktopNavigation: {
    display: "block",
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  navbarNav: {
    listStyle: 'none',
    display: 'flex',
  },
  menuItem: {
    margin: '0px 15px',
    position: 'relative',
    '& > a': {
      color: 'inherit',
      fontSize: '16px',
      textDecoration: 'none',
      cursor: 'pointer',
      fontWeight: 500
    },
  },
  fakeToolbar: {
    ...theme.mixins.toolbar,
    marginTop: 20,
  },
}));
