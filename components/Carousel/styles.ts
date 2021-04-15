import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  carouselContainer: {
    maxWidth: '100vw',
    minHeight: '100vh',
    padding: 0,

    alignContent: 'center',
    boxSizing: 'border-box',
    display: 'flex',
    flexWrap: 'wrap',
  },
  carouselSwapper: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 1,
    display: 'flex',
    transitionProperty: 'transform',
    boxSizing: 'content-box',

    marginLeft: 'auto',
    marginRight: 'auto',

    overflow: 'hidden',
    listStyle: 'none',
    padding: 0,
  },
  carouselItem: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: '#000',
    display: 'flex',
    alignItems: 'center',

    width: '100%',
    height: '100%',
    position: 'absolute',

    transition: 'all 3s cubic-bezier(0, 0, 0.2, 1) 0s',
  },
  carouselItemOpacity: {
    display: 'block',
    position: 'absolute',
    width: '100%',
    height: '100%',
    background: '#000',
    opacity: 0.3,
    left: 0,
    top: 0,
  },
  carouselItemContent: {
    maxWidth: '900px',
    margin: '0 auto',
    textAlign: 'center',
    position: 'relative',
    zIndex: 10,
  },
  title: {
    fontSize: '4.615rem',
    lineHeight: 1.4,
    fontWeight: 700,
    color: '#fff',
    marginBottom: '15px',
  },
  categories: {
    display: 'none',
    marginBottom: '20px',
  },
  category: {
    color: theme.palette.primary.dark,
    backgroundColor: 'white',
  },
  actions: {},
  pagination: {
    position: 'absolute',
    textAlign: 'center',
    transition: '.3s opacity',
    zIndex: 10,

    bottom: '50px',
    width: '100%',
    top: 'auto',
  },
  bullet: {
    width: '13px',
    height: '13px',
    background: '0 0',
    border: '1px solid #fff',
    borderRadius: '50%',
    opacity: 1,
    outline: 0,
    margin: '0 10px 0 0',
    display: 'inline-block',

    transition: 'all .2s',

    cursor: 'pointer'
  },
  bulletActive: {
    background: '#fff',
  },
}));

export default useStyles;
