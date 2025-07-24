import {Box, IconButton,} from "@mui/material";
import {GitHub, LinkedIn, Telegram,} from "@mui/icons-material";

const SidebarFooter = () => {
    return (
        <Box display="flex" gap={2} mr={"48px"}>
            <IconButton
                component="a"
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                <GitHub/>
            </IconButton>
            <IconButton
                component="a"
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                <LinkedIn/>
            </IconButton>
            <IconButton
                component="a"
                href="https://telegram.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Telegram/>
            </IconButton>
        </Box>
    );
}
export default SidebarFooter;