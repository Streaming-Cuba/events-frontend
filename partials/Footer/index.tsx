import React from 'react';

import { Grid, IconButton } from '@material-ui/core';
import clsx from 'clsx';

import useStyles from './styles';
import {
  Email as EmailIcon,
  LocationOn as LocationIcon,
  Phone as PhoneIcon,
  Twitter as TwitterIcon,
  Facebook as FacebookIcon,
  YouTube as YoutubeIcon,
} from '@material-ui/icons';

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <div className={classes.container}>
        <div className={classes.content}>
          <Grid container justify="space-between">
            <Grid item xs={12} sm={4}>
              <div className={classes.wrapper}>
                <div className={classes.title}>Contácto</div>
                <div>
                  <div className={classes.item}>
                    <LocationIcon />
                    Remangalatuerca. Santiago de Cuba.
                  </div>
                  <div className={classes.item}>
                    <EmailIcon />
                    streamingcuba@gmail.com
                  </div>
                  <div className={classes.item}>
                    <PhoneIcon />
                    +53 5X XXX XXX
                  </div>
                </div>
                <div className={classes.socials}>
                  <IconButton color="inherit">
                    <FacebookIcon />
                  </IconButton>
                  <IconButton color="inherit">
                    <YoutubeIcon />
                  </IconButton>
                  <IconButton color="inherit">
                    <TwitterIcon />
                  </IconButton>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div className={classes.wrapper}>
                <div className={classes.title}>Eventos notables</div>
                <div></div>
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div className={classes.wrapper}>
                <div className={classes.title}>¿Quiénes somos?</div>
                <div>
                  Somos un equipo especializado en el desarrollo de soluciones
                  informáticas para el streaming de video, en el seguimiento de eventos,
                  competencias y mucho más.
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className={classes.copyright}>
        <div className={clsx(classes.container, classes.copyrightContent)}>
          <a href="https://streamingcuba.com" className={classes.logo}>
            <span>StreamingCuba v222</span>
          </a>
          <p>
            Copyright © {new Date().getFullYear()} StreamingCuba - All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
