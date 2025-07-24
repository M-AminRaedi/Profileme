import Box from "@mui/material/Box";
import bgImage from "../assets/imges/Background/qa.webp";

const Background = ({ children }) => {
    return (
        <Box
            sx={{
                position: "relative",
                minHeight: "100vh",
                boxSizing: "border-box",
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: 3,
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
