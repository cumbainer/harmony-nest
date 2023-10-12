import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons/faHeart";
import { faUsers } from "@fortawesome/free-solid-svg-icons/faUsers";
import SideMenuItem from "./SideMenuItem.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { useContext } from "react";
import AuthContext from "../../store/auth-context.tsx";

const SideMenu = () => {
    const { isAuthenticated } = useContext(AuthContext);
    return (
        <>
            {isAuthenticated && (
                <div
                    className={`fixed top-0 left-0 h-full w-24 bg-[#1B1F38] flex flex-col transform translate-x-0 items-center`}
                >
                    <div className="border-2 rounded-full flex justify-center items-center w-16 h-16 border-sky-500 ring-0 my-1">
                        <FontAwesomeIcon
                            icon={faUser}
                            size={"2xl"}
                            style={{ color: "#ffffff" }}
                        />
                    </div>
                    <ul className="mt-40 flex flex-col items-center min-w-full">
                        <nav className="w-full">
                            <SideMenuItem icon={faHouse} />
                            <SideMenuItem icon={faHeart} />
                            <SideMenuItem icon={faUsers} />
                        </nav>
                    </ul>
                </div>
            )}
        </>
    );
};
export default SideMenu;
