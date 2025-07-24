import Grid from "@mui/material/Grid";
import Background from "../assets/Background";
const PagesContainer = ({children}) => {
    return (
        <Grid size={{xs: 12, sm: 12, md: 9, lg: 10, xl: 10}}>
            <Background>{children}</Background>
        </Grid>
    );
};

export default PagesContainer;
