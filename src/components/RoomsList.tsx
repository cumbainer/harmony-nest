import RoomItem from "./RoomItem.tsx";
import {RoomType} from "../util/rooms-loader.ts";


const RoomsList = (props: RoomType) => {

    return (
        <ul>
            {props.rooms.map(room => <RoomItem key={room.id} room={room}/>)}
        </ul>
    );
};
export default RoomsList;