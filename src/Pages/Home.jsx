import {Typography} from "@mui/material";
import {useEffect, useRef} from "react";
import Typed from "typed.js";


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
            typeSpeed: 20,    // تایپ سریع
            backSpeed: 20,
            backDelay: 2000,  // مکث 2 ثانیه بعد از تایپ کامل
            showCursor: false,
        });
        const typedInfo = new Typed(infoEl.current, {
            strings: strings,
            startDelay: 1500,
            typeSpeed: 25,    // تایپ سریع
            backSpeed: 50,
            backDelay: 2200,  // مکث 2.2 ثانیه بعد از هر جمله
            loop: true,
            showCursor: false,
        });
        return () => {
            typedInfo.destroy();
            typeName.destroy();
        };
    }, []);
    return (
        <>
            <Typography ref={nameEl} variant="h3" sx={{color: "#8be9fd", textAlign: "center", marginBottom: "5%"}}/>
            <Typography
                ref={infoEl}
                variant="h4"
                color="#FFF"
                sx={{
                    textAlign: "center",
                    mt: 2,
                }}
            />
        </>
    );
};
export default Home;
