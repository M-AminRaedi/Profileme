import { Typography, Box } from "@mui/material";

const TextMe = () => {
    return (
        <Box
            sx={{
                direction: "rtl",
                textAlign: "justify",
                padding: 3,
                color: "white",
                borderRadius: 2,
                boxShadow:"0px 0px 5px 0px #8be9fd",
                width: "100%",
                whiteSpace: "pre-wrap",
                backgroundColor:"#1c1c26  "
            }}
        >
            <Typography variant="h6" gutterBottom>
                درباره من
            </Typography>

            <Typography sx={{ fontSize: "1rem", lineHeight: 2 }}>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطر آنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                بهبود ابزارهای کاربردی می‌باشد. کتاب‌های زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
                جامعه و متخصصان را می‌طلبد تا با نرم‌افزارها شناخت بیشتری را برای طراحان رایانه‌ای علی‌الخصوص
                طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
            </Typography>
        </Box>
    );
};

export default TextMe;
