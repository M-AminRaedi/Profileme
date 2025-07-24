import {Drawer} from "@mui/material";
import SidebarContent from "../Sidebar/SidebarContent";
import {useContext} from "react";
import MainContext from "../Context";

const SidebarDrawer = () => {

    const {drawerOpen , setDrawerOpen} = useContext(MainContext)

    return (
        <Drawer
            open={drawerOpen}
            anchor={"right"}
            variant="temporary"
            onClose={() => setDrawerOpen(false)}
            sx={{"& .MuiDrawer-paper": {width: "300px"}}}
        >
            <SidebarContent/>
        </Drawer>
    )
}
export default SidebarDrawer;