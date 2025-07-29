import {Card, CardContent, Grid, Divider, Chip, Typography, Box} from "@mui/material";
import DevInfo from "./Component/DevInfo";
import TextMe from "./Component/TextMe";
import Skill from "./Component/Skill";

const ResumeMe = () => {
    return (
        <Card
            sx={{
                backgroundColor: "#10101a",
                minHeight: "100vh",
                color: "#fff",
                borderRadius: "0px !important",
            }}
        >
            <CardContent
                sx={{
                    maxHeight: "calc(100vh - 64px)", // کسر ارتفاع هدر یا حاشیه (64px نمونه است)
                    overflowY: "auto",
                    "&::-webkit-scrollbar": {
                        width: "8px",
                    },
                }}
            >
                <Divider
                    textAlign="center"
                    sx={{
                        width: "34%",
                        mx: "auto",
                        my: "auto",
                        "&::before, &::after": {
                            borderColor: "red",
                            borderTop: "1px solid white",
                            marginTop: "10px",
                        },
                    }}
                >
                    <Chip
                        sx={{marginTop: "10px", backgroundColor: "white"}}
                        label={
                            <Typography variant="body1" sx={{textAlign: "center", color: "black"}}>
                                رزومه من
                            </Typography>
                        }
                    />
                </Divider>
            </CardContent>
        </Card>
    );
};

export default ResumeMe;
