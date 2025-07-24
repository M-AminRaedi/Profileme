import { ThemeProvider } from "@mui/material/styles";
import { Index } from "./Themes";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "@mui/stylis-plugin-rtl";
import Grid from "@mui/material/Grid";
const cacheRtl = createCache({
    key: "muirtl",
    stylesPlugins: [prefixer, rtlPlugin],
});
const MainLayout = ({ children }) => {
    return (
        <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={Index}>
                <HelmetProvider>
                    <Helmet>
                        <title>محمدامین رعدی</title>
                    </Helmet>
                    <Grid container sx={{ height: "100vh" }}>
                        {children}
                    </Grid>
                </HelmetProvider>
            </ThemeProvider>
        </CacheProvider>
    );
};

export default MainLayout;
