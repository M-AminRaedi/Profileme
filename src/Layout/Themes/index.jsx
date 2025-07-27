import { createTheme } from "@mui/material/styles";
import { blue, red } from "@mui/material/colors";

export const Index = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#8be9fd",
        },
        secondary: {
            main: red[500],  // اینجا رنگ دلخواهت رو بگذار
        },
    },
    typography: {
        fontFamily: "vazir, roboto",
    },
    components: {
        MuiButton: {
            variants: [
                {
                    props: { variant: "dashed" },
                    style: {
                        textTransform: "none",
                        border: `2px dashed ${blue[500]}`,
                    },
                },
            ],
            styleOverrides: {
                root: {
                    // اگر می‌خوای استایل پیش‌فرض رو تغییر بدی اینجا بذار
                },
            },
        },
    },
});
