import { Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import Background from "../assets/Background"; // فرض بر اینکه کامپوننت Background به درستی تعریف شده

const Home = () => {
    const nameEl = useRef(null);
    const infoEl = useRef(null);

    const strings = [
        "Front-end Web Developer",
        "React Developer",
        "UI/UX Designer",
    ];

    useEffect(() => {
        const typeName = new Typed(nameEl.current, {
            strings: ["Mohammad Amin Readi"],
            typeSpeed: 20,
            backSpeed: 20,
            backDelay: 2000,
            showCursor: false,
        });

        const typedInfo = new Typed(infoEl.current, {
            strings: strings,
            startDelay: 1500,
            typeSpeed: 25,
            backSpeed: 50,
            backDelay: 2200,
            loop: true,
            showCursor: false,
        });

        return () => {
            typedInfo.destroy();
            typeName.destroy();
        };
    }, []);

    return (
        <Background>
            <Typography
                ref={nameEl}
                variant="h3"
                sx={{ color: "#8be9fd", textAlign: "center", marginBottom: "5%" }}
            />
            <Typography
                ref={infoEl}
                variant="h4"
                color="#FFF"
                sx={{ textAlign: "center", mt: 2 }}
            />
        </Background>
    );
};

export default Home;
