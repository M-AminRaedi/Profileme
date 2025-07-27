import {
    Chip,
    Divider,
    Typography,
    Box,
    LinearProgress,
} from "@mui/material";

const Skill = ({ icon, color, name, value }) => {
    return (
        <>
            <Divider
                textAlign="right"
                sx={{
                    "&::before, &::after": {
                    },
                    mt: 1,
                }}
            >
                <Chip
                    icon={
                        icon ? (
                            <Box component="img" src={icon} sx={{ height: 30 }} />
                        ) : undefined
                    }
                    color={color}
                    label={name}
                    sx={{ color: "#000", p: 3 }}
                />
            </Divider>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ minWidth: 35 }}>
                    <Typography variant="body2" color="text.primary">
                        {value}
                    </Typography>
                </Box>
                <Box sx={{ width: "100%", mr: 1 }}>
                    <LinearProgress
                        variant="determinate"
                        value={value}
                        color={color}
                        sx={{
                            height: 10,
                            borderRadius: 2,
                            transform: "scaleX(-1)",
                            direction: "ltr", // حتما اضافه کن تا محتوا معکوس نشه
                        }}
                    />

                </Box>
            </Box>
        </>
    );
};

export default Skill;
