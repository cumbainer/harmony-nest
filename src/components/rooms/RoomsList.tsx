import RoomItem from "./room-item/RoomItem.tsx";
import {RoomType} from "../../util/request-functions.ts";

const RoomsList = (props: RoomType) => {

    return (
        <ul className={`space-y-6`}>
            {props.rooms.map((room) => (
                <RoomItem key={room.id} room={room}/>
            ))}
        </ul>
    );
};

export default RoomsList;


