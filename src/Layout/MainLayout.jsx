import {ThemeProvider} from "@mui/material/styles";
import {Index} from "./Themes";
import {CacheProvider} from "@emotion/react";
import createCache from "@emotion/cache";
import {prefixer} from "stylis";
import rtlPlugin from "@mui/stylis-plugin-rtl";
import Grid from "@mui/material/Grid";

const cacheRtl = createCache({
    key: "muirtl",
    stylesPlugins: [prefixer, rtlPlugin],
});
const MainLayout = ({children}) => {
    return (
        <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={Index}>
                <title>محمدامین رعدی</title>
                <Grid container sx={{height: "100vh"}}>
                    {children}
                </Grid>
        </ThemeProvider>
</CacheProvider>
)
    ;
};

export default MainLayout;
