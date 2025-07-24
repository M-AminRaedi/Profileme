import { Box, Fab } from "@mui/material";
import {MenuOutlined} from "@mui/icons-material";
import { useContext } from "react";
import ContextIndex from "../Context";

const DrawerActionButton = () => {
    const { setDrawerOpen } = useContext(ContextIndex);
    return (
        <Box sx={{ display: { position:"absolute", xs: "block", sm: "block", md: "none", lg: "none", xl: "none" } }}>
            <Fab
                color="primary"
                aria-label="Sidebar"
                size="small"
                sx={{ m: 2 }}
                onClick={() => setDrawerOpen(true)}
            >
                <MenuOutlined />
            </Fab>
        </Box>
    );
};

export default DrawerActionButton;
