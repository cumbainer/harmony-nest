import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

interface Props {
    icon: IconDefinition;
}

const SideMenuItem = (props: Props) => {
    //todo replace with router is active
    const [isActive, setIsActive] = useState(false);

    return (
        <li
            className={`h-16 text-zinc-200 cursor-pointer min-w-full flex justify-center items-center ${
                isActive ? "bg-[#1D82CC] " : ""
            }`}
            onClick={() => {
                setIsActive(true);
            }}
        >
            <FontAwesomeIcon
                icon={props.icon}
                size="2xl"
                style={{ color: "#ffffff" }}
            />
        </li>
    );
};
export default SideMenuItem;
