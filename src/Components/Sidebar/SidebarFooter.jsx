import { Box, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Telegram } from '@mui/icons-material';

const SidebarFooter = () => {
    return (
        <Box
            display="flex"
            gap={2}
            mr="48px"
            alignItems="center"
            sx={{ color: 'white' }}
        >
            <IconButton
                component="a"
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
            >
                <GitHub />
            </IconButton>
            <IconButton
                component="a"
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
            >
                <LinkedIn />
            </IconButton>
            <IconButton
                component="a"
                href="https://telegram.org"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
            >
                <Telegram />
            </IconButton>
        </Box>
    );
};

export default SidebarFooter;