import RoomItem from "./room-item/RoomItem.tsx";
import {RoomType} from "../../util/rooms-loader.ts";
import React from "react";


const RoomsList = (props: RoomType) => {

    const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {


    };

    return (
        <div className="relative">
            <div className="flex justify-between my-8">
                <div className="flex items-center gap-2">
                    <div className="w-1 h-10 bg-white rounded-lg"></div>
                    <h1 className="text-3xl ms-1 text-sky-500 shadow-2xl font-bold">Rooms List</h1>
                </div>
                <button className="bg-sky-500 rounded-full text-2xl text-white p-3" onClick={onClickHandler}>
                    Create your room
                </button>
            </div>
            <ul className="space-y-6">
                {props.rooms.map(room => <RoomItem key={room.id} room={room}/>)}
            </ul>
        </div>
    );
};
export default RoomsList;