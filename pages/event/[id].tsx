import { makeStyles, Theme, Breadcrumbs, Typography } from '@material-ui/core';
import { useRouter } from 'next/router';
import { NavigateNext as NavigateNextIcon } from '@material-ui/icons';
import React from 'react';
import Link from '../../components/Link';

function EventById() {
  const router = useRouter();

  const { id } = router.query;

  const classes = useStyles();

  return (
    <div>
      <div className={classes.titleBar}>
        <div className={classes.titleBackground} />
        <div className={classes.container}>
          <h1>{id}</h1>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
            className={classes.breadcrumbs}
          >
            <Link href="/" color="inherit">
              Inicio
            </Link>
            <Link href="/events" color="inherit">
              Eventos
            </Link>
            <Typography color="inherit" className={classes.breadcrumbActive}>
            {id}
            </Typography>
          </Breadcrumbs>
        </div>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  titleBar: {
    marginTop: 0,
    background: '#121219',
    position: 'relative',
    padding: '120px 0',
    marginBottom: '90px',
  },
  titleBackground: {
    backgroundImage: 'url(/images/breadcrumbs-bg.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'absolute',
    opacity: 0.4,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  container: {
    position: 'relative',
    zIndex: 1,
    width: '100%',
    paddingRight: '15px',
    paddingLeft: '15px',
    marginRight: 'auto',
    marginLeft: 'auto',

    '& > h1': {
      margin: 0,
      color: '#fff',
      fontSize: '3rem',
      fontWeight: 600,
      wordBreak: 'break-word',
    },
  },
  breadcrumbs: {
    color: '#fff',
  },
  breadcrumbActive: {
    borderBottom: `2px solid ${theme.palette.primary.light}`,
  },
  
}));

export default EventById;
