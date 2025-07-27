import { Typography, Box } from "@mui/material";
import { ArrowLeft } from "@mui/icons-material";

const DevInfo = ({ label, value }) => {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                margin: "25px 28px",
                fontSize: "18px",
                fontFamily: "vazir",
            }}
        >
            <Typography variant="body1" component="div">
                <Typography component="span" sx={{ color: "white", fontWeight: "bold" }}>
                    {label}
                </Typography>{" "}
                <Typography component="span" sx={{ color: "#34ff91", ml: 1 }}>
                    {value}
                </Typography>
            </Typography>

            <ArrowLeft
                sx={{
                    verticalAlign: "bottom",
                    height: "30px",
                    ml: 1,
                    color: "#34ff91",
                }}
            />
        </Box>
    );
};

export default DevInfo;
