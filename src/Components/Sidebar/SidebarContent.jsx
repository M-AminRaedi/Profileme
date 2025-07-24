import {Box} from "@mui/material";
import SidebarHeader from "./SidebarHeader";
import SidebarTabs from "./SidebarTabs";

const SidebarContent = () => {
    return (
        <Box sx={{
            justifyContent: "center",
            textAlign: "center",
            mt: 4,
            color: "#e8eaf6",
        }}
        >
            <SidebarHeader/>
            <SidebarTabs />
        </Box>
    );
};
export default SidebarContent;
