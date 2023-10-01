import RoomItem from "./RoomItem.tsx";
import {RoomType} from "../util/rooms-loader.ts";


const RoomsList = (props: RoomType) => {

    return (
        <div className="inline-flex m-20">
            <ul className="space-y-10">
                {props.rooms.map(room => <RoomItem key={room.id} room={room}/>)}
            </ul>
        </div>
    );
};
export default RoomsList;