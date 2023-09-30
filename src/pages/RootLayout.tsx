import SideMenu from "../components/side-menu/SideMenu.tsx";
import Header from "../components/Header.tsx";
import {Outlet} from "react-router";

const RootLayout = () => {
    return (
        <div className={"bg-[#13182B]"}>
            <SideMenu />
            <Header />
            <Outlet />
        </div>
    );
};
export default RootLayout;