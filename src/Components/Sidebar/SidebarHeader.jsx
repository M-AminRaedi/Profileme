import {Avatar, Divider, Typography} from "@mui/material";

const SidebarHeader = () => {
    return (
        <>
            <Avatar
                src={require("../../assets/imges/Avatar/avatar.png")}
                variant="circular"
                alt="عکس آپلود نشده است "
                sx={{
                    height: "150px",
                    width: "150px",
                    margin: "5px auto",
                    boxShadow: "0px 0px 10px 0px gray",
                    display: {
                        xs: "none",
                        sm: "none",
                        md: "none",
                        lg: "block",
                        xl: "block",
                    },
                }}
            >
            </Avatar>
            <Typography variant="h6">محمدامین رعدی</Typography>
            <Divider
                sx={{
                    margin: "8px auto",
                    width: "85%",
                    color: "#e8eaf6",
                }}
            />
            <Typography variant="h6">برنامه نویس فرانت اند</Typography>
        </>
    );
}
export default SidebarHeader;