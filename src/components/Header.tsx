import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import {faLanguage} from "@fortawesome/free-solid-svg-icons/faLanguage";

const Header = () => {
    return (
        <div className="absolute top-0 w-full bg-[#1B1F38] h-16 p-4 flex items-center">
            <div className="border-2 rounded-full flex justify-center items-center w-16 h-16 border-sky-500 mt-4 ring-0">
                <FontAwesomeIcon icon={faUser} size={"2xl"} style={{color: "#ffffff"}}/>
            </div>
            {/*todo hide icon where the text is approaching*/}
            <div className="mx-32 relative">
                <input type="text" className={`bg-[#1B1F38] p-3 border-2 rounded-lg text-zinc-200 border-[#1D82CC]
                focus:outline-none focus:border-sky-400 font-semibold w-64 mx-1 placeholder:text-gray-500
                placeholder:text-lg placeholder:mx-10 h-8 text-lg`} placeholder={"Search songs"} />
                <FontAwesomeIcon className={"absolute top-1/2 transform -translate-y-1/2 right-3"}
                                 icon={faMagnifyingGlass} size="lg" style={{color: "#ffffff",}} />
            </div>
            <div className="mx-5">
                <h1 className="text-sky-500 font-semibold">Harmony Nest <span className="text-white"> : listen to music with your friends</span></h1>
            </div>
            <div className="me-20 absolute right-0 text-white">
                <div className="flex items-center gap-3">
                    <h1>Language</h1>
                    <FontAwesomeIcon icon={faLanguage} size={"xl"} />
                </div>
                <div>
                    {/*todo maybe login and register*/}

                </div>
            </div>
        </div>
    );
};

export default Header;
    