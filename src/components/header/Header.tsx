import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLanguage} from "@fortawesome/free-solid-svg-icons/faLanguage";
import {useContext} from "react";
import AuthContext from "../../store/auth-context.tsx";
import Search from "./Search.tsx";

const Header = () => {
    const {isAuthenticated} = useContext(AuthContext);
    return (
        <>
            {isAuthenticated && (
                <div className="absolute top-0 w-full bg-[#1B1F38] h-16 p-4 flex items-center">
                    {/*todo hide icon where the text is approaching*/}
                    <Search />
                    <div className="mx-5">
                        <h1 className="text-sky-500 font-semibold">Harmony Nest <span className="text-white">
                            : listen to music with your friends</span>
                        </h1>
                    </div>
                    <div className="me-20 absolute right-0 text-white">
                        <div className="flex items-center gap-3">
                            <h1>Language</h1>
                            <FontAwesomeIcon icon={faLanguage} size={"xl"}/>
                        </div>
                        <div>
                            {/*todo maybe login and register*/}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
    