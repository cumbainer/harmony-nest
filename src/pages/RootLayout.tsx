import SideMenu from "../components/side-menu/SideMenu.tsx";
import Header from "../components/header/Header.tsx";
import {Outlet} from "react-router";

const RootLayout = () => {
    return (
        <div className={"h-fit"}>
            <Header />
            <div className="flex">
                <div className="flex-grow p-24">
                    <Outlet  />
                </div>
                <SideMenu />
            </div>
        </div>
    );
};
export default RootLayout;