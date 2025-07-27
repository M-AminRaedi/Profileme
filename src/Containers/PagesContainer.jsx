import Grid from "@mui/material/Grid";
const PagesContainer = ({children}) => {
    return (
        <Grid size={{xs: 12, sm: 12, md: 9, lg: 10, xl: 10}}>
            {children}
        </Grid>
    );
};

export default PagesContainer;
