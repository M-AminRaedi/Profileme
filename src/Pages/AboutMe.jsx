import { Card, CardContent, Grid, Divider, Chip, Typography, Box } from "@mui/material";
import DevInfo from "./Component/DevInfo";
import Skill from "./Component/Skill";
import { devSkills } from "../constants/skills";
import TextMe from "./Component/TextMe";

const AboutMe = () => {
    const { htmlSkill, cssSkill, jsSkill, reactSkill, nodeSkill, gitSkill } = devSkills;

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
                    "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "#888",
                        borderRadius: "4px",
                    },
                    "&::-webkit-scrollbar-track": {
                        backgroundColor: "#f1f1f1",
                    },
                }}
            >
                <Grid container sx={{ mx: 3, color: "black" }}>
                    <Grid item xs={12} sm={12} md={8} xl={8}>
                        {/* مشخصات */}
                        <Divider
                            variant="fullWidth"
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
                                sx={{ marginTop: "10px", backgroundColor: "white" }}
                                label={
                                    <Typography variant="body1" sx={{ textAlign: "center", color: "black" }}>
                                        مشخصات
                                    </Typography>
                                }
                            />
                        </Divider>

                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row-reverse",
                                flexWrap: "wrap",
                                justifyContent: "center",
                            }}
                        >
                            <DevInfo label="نام و نام خانوادگی :" value="محمدامین رعدی" />
                            <DevInfo label="شغل :" value="برنامه‌نویس فرانت‌اند" />
                            <DevInfo label="شهر :" value="تهران" />
                            <DevInfo label="ایمیل :" value="Amin@yahoo.com" />
                            <TextMe />
                        </Box>
                    </Grid>
                </Grid>

                <Grid container sx={{ mt: 2 }}>
                    <Grid item xs={12} sx={{ width: 1, mt: 1 }}>
                        {/* مهارت */}
                        <Divider
                            variant="fullWidth"
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
                                sx={{ marginTop: "10px", backgroundColor: "white" }}
                                label={
                                    <Typography variant="body1" sx={{ textAlign: "center", color: "black" }}>
                                        مهارت
                                    </Typography>
                                }
                            />
                        </Divider>

                        <Box sx={{ mt: 2 }}>
                            <Skill name={htmlSkill.name} color={htmlSkill.color} value={95} />
                            <Skill name={cssSkill.name} color={cssSkill.color} value={95} />
                            <Skill name={jsSkill.name} color={jsSkill.color} value={95} />
                            <Skill name={reactSkill.name} color={reactSkill.color} value={95} />
                            <Skill name={nodeSkill.name} color={nodeSkill.color} value={95} />
                            <Skill name={gitSkill.name} color={gitSkill.color} value={95} />
                        </Box>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default AboutMe;