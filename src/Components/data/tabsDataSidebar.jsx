import {
    AssignmentIndOutlined,
    AssignmentOutlined, CommentOutlined, ConnectWithoutContactOutlined,
    HomeOutlined,
    IntegrationInstructionsOutlined
} from "@mui/icons-material";

const tabProps = (index) => {
    return {
        id: `sidebar-tab-${index}`,
        "aria-controls": `tabpanel-${index}`,
    }
};
export const tabsData=() =>{
    const tabs = [
        {label: "صفحه نخست ", icon: <HomeOutlined/>, ...tabProps(0)},
        {label: "درباره من ", icon: <AssignmentIndOutlined/>, ...tabProps(1)},
        {label: "رزومه من ", icon: <AssignmentOutlined/>, ...tabProps(2)},
        {label: "نمونه کارای من", icon: <IntegrationInstructionsOutlined/>, ...tabProps(3)},
        {label: "نظرات و کامنت ها ", icon: <CommentOutlined/>, ...tabProps(4)},
        {label: "ارتباط با من ", icon: <ConnectWithoutContactOutlined/>, ...tabProps(5)},
    ];
    return tabs;
};
