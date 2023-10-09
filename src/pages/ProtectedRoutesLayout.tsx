import SideMenu from "../components/side-menu/SideMenu.tsx";
import Header from "../components/header/Header.tsx";
import {Outlet} from "react-router";
import {useContext} from "react";
import AuthContext from "../store/auth-context.tsx";
import Login from "../components/Login.tsx";
import {useFetcher} from "react-router-dom";

const ProtectedRoutesLayout = () => {
    const fetcher = useFetcher();
    const authContext = useContext(AuthContext);
    return (
        <>
            {authContext.isAuthenticated ? <div className={"h-fit"}>
                <Header/>
                <div className="flex">
                    <div className="flex-grow p-24">
                        <Outlet/>
                    </div>
                    <SideMenu/>
                </div>
            </div> : <fetcher.Form action='/auths' method="post" className="text-white overflow-x-hidden h-screen absolute
            flex flex-col top-0">
                <Login/>
            </fetcher.Form>}
        </>
    );
};
export default ProtectedRoutesLayout;