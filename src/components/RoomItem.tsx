import {Room} from "../util/rooms-loader.ts";


const RoomItem = (props: { room: Room }) => {
    return (
        <li className="text-white">
AAAAAAAAAAA
            {props.room.title}

        </li>
    );
};
export default RoomItem;