import SideMenu from "../components/side-menu/SideMenu.tsx";
import Header from "../components/Header.tsx";
import {Outlet} from "react-router";

const RootLayout = () => {
    return (
        <div className={"bg-[#13182B] w-screen h-fit"}>
            {/*<Header />*/}
            <div className="flex">
                {/*<SideMenu />*/}
                <Outlet />
            </div>
        </div>
    );
};
export default RootLayout;