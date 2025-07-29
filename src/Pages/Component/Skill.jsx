import { Chip, Divider, Typography, Box, LinearProgress } from "@mui/material";

const Skill = ({ icon, color, name, value }) => {
    return (
        <Box sx={{ mb: 3 }}>
            <Divider
                textAlign="right"
                sx={{
                    mt: 1,
                    mb: 2,
                    "&::before, &::after": {
                        borderColor: "rgba(255,255,255,0.2)",
                    },
                }}
            >
                <Chip
                    icon={
                        icon ? (
                            <Box
                                component="img"
                                src={icon}
                                alt={name}
                                sx={{
                                    height: 40,
                                    width: 40,
                                    objectFit: "contain",
                                    backgroundColor: "transparent",
                                    borderRadius: 0,
                                    mr: "-8px", // کمی به خط نزدیک‌تر شه
                                }}
                            />
                        ) : undefined
                    }
                    label={name}
                    sx={{
                        color: "#000",
                        backgroundColor: "transparent",
                        boxShadow: "none",
                        fontSize: "1rem",
                        mr: "-14px",
                        "& .MuiChip-icon": {
                            mr: 0,
                        },
                    }}
                />
            </Divider>

            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ minWidth: 35 }}>
                    <Typography variant="body2" color="text.primary">
                        {Math.round(value)}%
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
                            direction: "ltr",
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default Skill;
