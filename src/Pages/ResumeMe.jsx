import {Card, CardContent, Divider, Chip, Typography, Grid, Box} from "@mui/material";
import {DataObjectOutlined, SchoolRounded} from "@mui/icons-material";
import TimeEdu from "./Component/TimeEdu";
import TimeWork from "./Component/TimeWork";
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
                    maxHeight: "calc(100vh - 64px)",
                    overflowY: "auto",
                    "&::-webkit-scrollbar": {
                        width: "8px",
                    },
                }}
            >
                <Divider
                    variant="fullWidth"
                    textAlign="right"
                    sx={{
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
                                مشخصات
                            </Typography>
                        }
                    />
                </Divider>
                <Grid
                    container
                    sx={{
                        mt: 4,
                        display: "flex",
                        justifyContent: "space-around",
                        flexDirection: "row-reverse",
                    }}
                >
                    <Grid item xs={12} md={6}>
                        <Divider
                            textAlign="center"
                            sx={{
                                width: "500px",
                                "&::before, &::after": {
                                    borderColor: "warning.main",
                                },
                            }}
                        >
                            <Chip
                                icon={<DataObjectOutlined/>}
                                color="warning"
                                label={
                                    <Typography variant="body1" color="black" sx={{textAlign: "center"}}>
                                        تجربیات
                                    </Typography>
                                }
                                sx={{p: 3}}
                            />
                        </Divider>
                        <TimeWork/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Divider
                            textAlign="center"
                            sx={{
                                width: "500px",
                                "&::before, &::after": {
                                    borderColor: "info.main",
                                },
                            }}
                        >
                            <Chip
                                icon={<SchoolRounded/>}
                                color="info"
                                label={
                                    <Typography variant="body1" color="black" sx={{textAlign: "center"}}>
                                        تحصیلات
                                    </Typography>
                                }
                                sx={{p: 3}}
                            />
                        </Divider>
                        <TimeEdu/>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default ResumeMe;
