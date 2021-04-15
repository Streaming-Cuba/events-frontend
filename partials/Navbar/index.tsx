import React from 'react';
import ElevationScroll from '../../components/ElevationScroll';

import { AppBar, Grid, Toolbar, Typography } from '@material-ui/core';
import clsx from 'clsx';
import Link from 'next/link';

import useStyles from './styles';

function Navbar() {
  const classes = useStyles();

  return (
    <>
      <ElevationScroll
        className={classes.appBar}
        onTriggerClassName={clsx({
          [classes.elevatedAppBar]: true,
        })}
      >
        <AppBar>
          <Toolbar className={classes.toolbar}>
            <div className={classes.container}>
              <Grid container>
                <Grid
                  item
                  sm={3}
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  <Typography variant="h5" style={{ marginLeft: '5px' }}>
                    Eventos
                  </Typography>
                </Grid>
                <Grid item sm={9} className={classes.columnRoot}>
                  <nav>
                    <ul className={classes.navbarNav}>
                      <li className={clsx(classes.menuItem)}>
                        <Link href="/">Inicio</Link>
                      </li>
                      <li className={clsx(classes.menuItem)}>
                        <Link href="/events">Eventos</Link>
                      </li>
                      <li className={clsx(classes.menuItem)}>
                        <Link href="/about-us">Acerca de</Link>
                      </li>
                    </ul>
                  </nav>
                </Grid>
              </Grid>
            </div>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </>
  );
}

export default Navbar;
