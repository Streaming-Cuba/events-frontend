import React from "react";
import { Drawer, List, ListItem, ListItemText } from "@material-ui/core";
import Link from "next/link";

import { useTypedSelector } from "../../apis/redux";

function Sidebar() {
  const { isSidebarOpen } = useTypedSelector((state) => state.layout);

  return (
    <Drawer open={isSidebarOpen}>
      <List component="nav">
        <ListItem button component={Link} href="/">
          <ListItemText primary="Inicio" />
        </ListItem>
        <ListItem button component={Link} href="/events">
          <ListItemText primary="Eventos" />
        </ListItem>
        <ListItem button component={Link} href="/about-us">
          <ListItemText primary="Acerca de" />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default Sidebar;
