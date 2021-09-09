import React from "react";
import ElevationScroll from "../../components/ElevationScroll";

import {
  AppBar,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import Link from "next/link";
import { Menu as MenuIcon } from "mdi-material-ui";

import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../apis/redux/reducers/layout/layout.actions";
import Logo from "../../components/Logo";

function Navbar() {
  const classes = useStyles();

  const dispatch = useDispatch();

  const onSidebarClick = () => {
    dispatch(toggleSidebar());
  };

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
                  xs={11}
                  sm={3}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <img
                    style={{ maxWidth: "80px", marginTop: "5px" }}
                    src="https://res.cloudinary.com/streaming-cuba/image/upload/v1619921447/events/STREAMING_EVENTOS_MAS_GRANDE_1_cst2ib.png"
                  />
                  {/* <Logo /> */}
                </Grid>
                <Grid item xs={1} sm={9} className={classes.columnRoot}>
                  {/* <nav className={classes.desktopNavigation}>
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
                  <div className={classes.mobileNavigation}>
                    <IconButton onClick={onSidebarClick} color="inherit">
                      <MenuIcon />
                    </IconButton>
                  </div> */}
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
