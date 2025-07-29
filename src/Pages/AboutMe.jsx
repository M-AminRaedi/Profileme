import {Card, CardContent, Grid, Divider, Chip, Typography, Box} from "@mui/material";
import DevInfo from "./Component/DevInfo";
import Skill from "./Component/Skill";
import {devSkills} from "../constants/skills";
import TextMe from "./Component/TextMe";
import {useEffect, useState} from "react";

const AboutMe = () => {
    const [javascript, setJavascript] = useState(0);
    const [css, setCss] = useState(0);
    const [html, setHtml] = useState(0);
    const [reactJS, seReactJS] = useState(0);
    const [git, setGit] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setJavascript((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 82);
            });
            setCss((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 80)
            });
            setHtml((oldProgress) => {
                const diff = Math.random() * 10;
                return (Math.min(oldProgress + diff, 90));
            });
            seReactJS((oldProgress) => {
                const diff = Math.random() * 10;
                return (Math.min(oldProgress + diff, 90));
            });
            setGit((oldProgress) => {
                const diff = Math.random() * 10;
                return (Math.min(oldProgress + diff, 90))
            });

        },130);
        return () => {
            clearTimeout(timer)
        }
    }, [])

    const {htmlSkill, cssSkill, jsSkill, reactSkill, nodeSkill, gitSkill} = devSkills;
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
                <Grid container sx={{mx: 3, color: "black"}}>
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
                                sx={{marginTop: "10px", backgroundColor: "white"}}
                                label={
                                    <Typography variant="body1" sx={{textAlign: "center", color: "black"}}>
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
                            <DevInfo label="نام و نام خانوادگی :" value="محمدامین رعدی"/>
                            <DevInfo label="شغل :" value="برنامه‌نویس فرانت‌اند"/>
                            <DevInfo label="شهر :" value="تهران"/>
                            <DevInfo label="ایمیل :" value="Amin@yahoo.com"/>
                            <TextMe/>
                        </Box>
                    </Grid>
                </Grid>

                <Grid container sx={{mt: 2}}>
                    <Grid item xs={12} sx={{width: 1, mt: 1}}>
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
                                sx={{marginTop: "10px", backgroundColor: "white"}}
                                label={
                                    <Typography variant="body1" sx={{textAlign: "center", color: "black"}}>
                                        مهارت
                                    </Typography>
                                }
                            />
                        </Divider>

                        <Box sx={{mt: 2}}>
                            <Skill name={htmlSkill.name} color={htmlSkill.color} value={html}/>
                            <Skill name={cssSkill.name} color={cssSkill.color} value={css}/>
                            <Skill name={jsSkill.name} color={jsSkill.color} value={javascript}/>
                            <Skill name={reactSkill.name} color={reactSkill.color} value={reactJS}/>
                            <Skill name={gitSkill.name} color={gitSkill.color} value={git}/>
                        </Box>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default AboutMe;