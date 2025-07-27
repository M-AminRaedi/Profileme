import Box from "@mui/material/Box";
import bgImage from "../assets/imges/Background/qa.webp";

const Background = ({ children }) => {
    return (
        <Box
            sx={{
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                minHeight: "100vh",
                boxSizing: "border-box",
                backgroundImage: `url(${bgImage})`,
                overflowY: "auto",

                "&::before": {
                    content: '""',
                    position: "absolute",
                    top: "6.5%",
                    left: "2%",
                    width: "96%",
                    height: "86%",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    zIndex: 1,
                    borderRadius: "10px",
                    border: "2px solid #24f9f8",
                },
                "& > *": {
                    position: "relative",
                    zIndex: 2,
                    width: "100%",
                    maxWidth: 600,
                    p: 4,
                    borderRadius: 2,
                    color: "#fff",
                },
            }}
        >
            {children}
        </Box>
    );
};

export default Background;
