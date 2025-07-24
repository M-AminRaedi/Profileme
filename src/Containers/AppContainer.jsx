import MainLayout from "../Layout/MainLayout";
import Sidebar from "../Components/Sidebar/Sidebar";
import PagesContainer from "./PagesContainer";
import {useState} from "react";
import Page from "../Pages/Component/Page";
import SidebarContainer from "./SidebarContainer";
import MainContext from "../Components/Context";
import DrawerActionButton from "../Components/Drawer/DrawerActionButton";
import SwipeableViews from "react-swipeable-views";
import {Home, AboutMe, ResumeMe, ContentUs, Coment, MyWork} from "../Pages"

function AppContainer() {
    const [pageNumber, setPageNumber] = useState(0);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handlePageNumber = (event, newValue) => {
        setPageNumber(newValue);
    };

    return (
        <MainContext.Provider
            value={{pageNumber, handlePageNumber, drawerOpen, setDrawerOpen}}
        >
            <MainLayout>
                <SidebarContainer>
                    <Sidebar/>
                </SidebarContainer>
                <DrawerActionButton/>
                <PagesContainer>
                    <SwipeableViews
                        index={pageNumber}
                        onChangeIndex={handlePageNumber}
                    >
                        <Page pageNumber={pageNumber} index={0}>
                            <Home/>
                        </Page>
                        <Page pageNumber={pageNumber} index={1}>
                            <AboutMe/>
                        </Page>
                        <Page pageNumber={pageNumber} index={2}>
                            <ResumeMe/>
                        </Page>
                        <Page pageNumber={pageNumber} index={3}>
                            <MyWork/>
                        </Page>
                        <Page pageNumber={pageNumber} index={4}>
                            <Coment/>
                        </Page>
                        <Page pageNumber={pageNumber} index={5}>
                            <ContentUs/>
                        </Page>
                    </SwipeableViews>
                </PagesContainer>
            </MainLayout>
        </MainContext.Provider>
    );
}

export default AppContainer;
