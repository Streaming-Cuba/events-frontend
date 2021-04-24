import React from "react";

import { Grid, IconButton, Link } from "@material-ui/core";
import clsx from "clsx";

import useStyles from "./styles";
import {
  Email as EmailIcon,
  LocationOn as LocationIcon,
  Phone as PhoneIcon,
  Instagram as InstagramIcon,
  Facebook as FacebookIcon,
  YouTube as YoutubeIcon,
} from "@material-ui/icons";

import info from "../../data/info.json";

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
                    {info.address}
                  </div>
                  <div className={classes.item}>
                    <EmailIcon />
                    {info.email}
                  </div>
                  <div className={classes.item}>
                    <PhoneIcon />
                    {info.cellphone}
                  </div>
                </div>
                <div className={classes.socials}>
                  <Link href={info.socials.facebook} color="inherit">
                    <FacebookIcon />
                  </Link>
                  <Link href={info.socials.youtube} color="inherit">
                    <YoutubeIcon />
                  </Link>
                  <Link href={info.socials.instagram} color="inherit">
                    <InstagramIcon />
                  </Link>
                </div>
              </div>
            </Grid>
            <Grid item xs={false} sm={4}>
              {/* <div className={classes.wrapper}>
                <div className={classes.title}>Eventos notables</div>
                <div></div>
              </div> */}
            </Grid>
            <Grid item xs={12} sm={4}>
              <div className={classes.wrapper}>
                <div className={classes.title}>¿Quiénes somos?</div>
                <div>
                  Somos un equipo especializado en el desarrollo de soluciones
                  informáticas para el streaming de video, en el seguimiento de
                  eventos, competencias y mucho más.
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className={classes.copyright}>
        <div className={clsx(classes.container, classes.copyrightContent)}>
          <a href="https://streamingcuba.com" className={classes.logo}>
            <span>StreamingCuba</span>
          </a>
          <p>
            Copyright © {new Date().getFullYear()} StreamingCuba - Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
