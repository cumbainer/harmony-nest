import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";

const Header = () => {
    return (
        <div className="absolute top-0 w-full bg-[#1B1F38] h-16 p-4 flex">
            <div className="border-2 rounded-full flex justify-center items-center w-16 h-16 border-sky-500 mx-1 ring-0">
                <FontAwesomeIcon icon={faUser} size={"2xl"} style={{color: "#ffffff"}}/>
            </div>
            {/*todo hide icon where the text is approaching*/}
            <div className="mx-14        relative">
                <input type="text" className={`bg-[#1B1F38] p-3 border-2 rounded-lg text-zinc-200 border-[#1D82CC]
                focus:outline-none focus:border-sky-400 font-semibold w-64 mx-1 placeholder:text-gray-500
                placeholder:text-lg placeholder:mx-10 h-8 text-lg`} placeholder={"Search songs"} />
                <FontAwesomeIcon className={"absolute top-1/2 transform -translate-y-1/2 right-3"}
                                 icon={faMagnifyingGlass} size="lg" style={{color: "#ffffff",}} />
            </div>
        </div>
    );
};

export default Header;
