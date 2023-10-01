import RoomItem from "./room-item/RoomItem.tsx";
import {RoomType} from "../../util/rooms-loader.ts";


const RoomsList = (props: RoomType) => {

    return (
        <div className="relative">
            <div className="absolute left-0 my-7 flex items-center gap-2">
                <div className="w-1 h-10 bg-white rounded-lg"></div>
                <h1 className="text-3xl ms-1 text-sky-500 shadow-2xl font-bold">Rooms List</h1>
            </div>
            <button className="p-4 my-3 bg-sky-500 rounded-full text-2xl text-white absolute right-0 top-0">Create your room</button>
            <ul className="space-y-6 mt-24">
                {props.rooms.map(room => <RoomItem key={room.id} room={room}/>)}
            </ul>
        </div>
    );
};
export default RoomsList;