import {createTheme} from "@mui/material/styles";
import {blue , red} from "@mui/material/colors"
export const Index = createTheme({
    palette: {
        mode: "dark",
        primary:{
            main:"#8be9fd"
        }
    },
    secondary: {
        main: "primary",
    },
    Typography: {
        fontFamily: "vazir,roboto",
    },
    components:{
        // MuiButtonBase:{
        //     defaultProps:{
        //         disableRipple:true,
        //     }
        // }
        MuiButton: {
            styleOverrides: {
                root: {
                    variants: [
                        {
                            // `dashed` is an example value, it can be any name.
                            props: { variant: 'dashed' },
                            style: {
                                textTransform: 'none',
                                border: `2px dashed ${blue[500]}`,
                            },
                        },
                    ],
                },
            },
        },
    }
});
