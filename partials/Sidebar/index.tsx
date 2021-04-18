import React from "react";
import { Drawer } from "@material-ui/core";

import { useTypedSelector } from "../../apis/redux";

function Sidebar() {

    const {isSidebarOpen} = useTypedSelector(state => state.layout);

    return (
        <Drawer open={isSidebarOpen}>
asdasda
        </Drawer>
    )
}

export default Sidebar;