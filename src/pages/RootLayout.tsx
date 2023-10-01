import SideMenu from "../components/side-menu/SideMenu.tsx";
import Header from "../components/Header.tsx";
import {Outlet} from "react-router";

const RootLayout = () => {
    return (
        <div className={"h-fit"}>
            {/*<Header />*/}
            <div className="flex justify-center">
                {/*<SideMenu />*/}
                <Outlet  />
            </div>
        </div>
    );
};
export default RootLayout;