import {Box} from "@mui/material";

const Page = (props) => {
    const {
        children, pageNumber, index, ...other} = props
    return (
        <div
            role="tabpanel"
            hidden={pageNumber !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`sidebar-${index}`}
            {...other}
        >
            {
                pageNumber === index && (
                    <Box sx={{p: 3}}>
                            {children}
                    </Box>
                )
            }
        </div>
    );
}
export default Page;

