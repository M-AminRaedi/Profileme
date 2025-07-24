import {Divider, Tab, Tabs} from "@mui/material";
import SidebarFooter from "./SidebarFooter";
import {useContext} from "react";
import MainContext from "../Context/index"
import {tabsData} from "../data/tabsDataSidebar";


const SidebarTabs = () => {
    const {pageNumber, handlePageNumber, setDrawerOpen} = useContext(MainContext);
    const data = tabsData();
    return (
        <Tabs
            orientation="vertical"
            variant="scrollable"
            scrollButtons="auto"
            value={pageNumber}
            onChange={handlePageNumber}
            sx={{
                "& .MuiTab-root": {
                    direction: "ltr",
                    justifyContent: "flex-start",
                    flexDirection: "row-reverse",
                    alignItems: "center",
                    gap: 1.5,
                    px: 2,
                    minHeight: 50,
                    fontSize: 16,
                    backgroundColor: "#222", // اضافه شده برای تست دیده شدن
                    color: "white",
                },
                "& .Mui-selected": {
                    backgroundColor: "#2d2f2f",
                    borderRadius: 1,
                    color: "#8be9fd",
                },
                "& .MuiTabs-indicator": {
                    left: 0,
                    right: "auto",
                    backgroundColor: "#8be9fd !important",
                    width: "2px",
                    height: "100%",
                },
            }}
        >
            {
                data.map((tab,index) =>(
                    <Tab
                        key={index}
                        label={tab.label}
                        icon={tab.icon}
                        iconPosition="start"
                        onClick={() => setDrawerOpen?.(false)}
                        sx={{margin: "0 5px"}}
                        {...tab}
                    />
                ))
            }
            <Divider
                sx={{
                    margin: "8px auto",
                    width: "85%",
                    color: "#e8eaf6",
                }}
            />
            <SidebarFooter/>
        </Tabs>
    )
}
export default SidebarTabs;