import { makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: '#121219',
    backgroundImage: 'url(/images/footer-bg.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
    marginTop: '90px',
  },
  container: {
    width: '100%',
    paddingRight: '15px',
    paddingLeft: '15px',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  content: {
    padding: '120px 20px',
  },
  wrapper: {},
  title: {
    fontSize: '1.385rem',
    marginBottom: '25px',
    textTransform: 'uppercase',
    fontWeight: 700,
  },
  item: {
    marginBottom: '13px',
    alignItems: 'center',
    display: 'flex',
    
    "& > svg": {
      marginRight: "12px"
    }
  },
  socials: {
    color: 'white',
    marginTop: '20px'
  },
  copyright: {
    borderTop: '1px solid rgba(255,255,255,.1)',
    padding: '15px 0',
  },
  copyrightContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.2rem',
  },
}));
