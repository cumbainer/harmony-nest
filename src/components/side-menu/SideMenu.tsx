
import {faHouse} from "@fortawesome/free-solid-svg-icons";
import {faHeart} from "@fortawesome/free-solid-svg-icons/faHeart";
import {faUsers} from "@fortawesome/free-solid-svg-icons/faUsers";
import SideMenuItem from './SideMenuItem.tsx';

const SideMenu = () => {
    return (
        <div className="h-screen flex-col items-center inline-flex w-24 bg-[#1B1F38] sticky">
            <ul className="mt-40 flex flex-col items-center min-w-full">
                <nav className="w-full">
                    <SideMenuItem icon={faHouse}/>
                    <SideMenuItem icon={faHeart}/>
                    <SideMenuItem icon={faUsers}/>
                </nav>
            </ul>

        </div>
    );
};
export default SideMenu;