import {Typography, Box} from "@mui/material";

const TextMe = () => {
    return (
        <Box
            sx={{
                direction: "rtl",
                textAlign: "justify",
                padding: 3,
                color: "white",
                borderRadius: 2,
                boxShadow: "0px 0px 5px 0px #8be9fd",
                width: "100%",
                whiteSpace: "pre-wrap",
                backgroundColor: "#1c1c26",
            }}
        >
            <Typography variant="h6" gutterBottom color={"#34ff91"}>
                درباره من
            </Typography>

            <Typography sx={{fontSize: "1rem", lineHeight: 2}}>
                من{" "}
                <Box component="span" sx={{color: "#34ff91", fontWeight: "bold"}}>
                    محمدامین
                </Box>{" "}
                هستم، توسعه‌دهنده‌ای توانمند در طراحی و پیاده‌سازی کامل وب اپلیکیشن‌های اختصاصی. مواجهه با چالش‌های
                متنوع برنامه‌نویسی برای من جذاب است و همیشه تلاش می‌کنم راه‌حل‌های خلاقانه و کارآمد ارائه دهم. در انتخاب
                ابزارها، با دقت و بر اساس نیاز پروژه بهترین گزینه‌ها را به کار می‌گیرم. کار با تکنولوژی‌های جدید از
                مهم‌ترین علاقه‌مندی‌ها و انگیزه‌های من در برنامه‌نویسی است.
            </Typography>
        </Box>
    );
};

export default TextMe;
