// import RoomItem from "./room-item/RoomItem.tsx";
// import {RoomType} from "../../util/rooms-loader.ts";
// import React, {useState} from "react";
// import {redirect, useFetcher} from "react-router-dom";
// import {action} from "../../pages/LoginPage.tsx";
// import CreateNewRoomPage from "../../pages/CreateNewRoomPage.tsx";
//
//
// //todo use react tanstack query to fetch rooms
// const RoomsList = (props: RoomType) => {
//     const [formIsActive, setFormIsActive] = useState(false);
//
//     const onClickHandler = () => {
//
//         setFormIsActive(true)
//         // fetcher.submit({action: "/auth", method: "post"})
//
//
//     };
//
//     return (
//         <>
//
//             <div className="relative">
//                 <div className="flex justify-between my-8">
//                     <div className="flex items-center gap-2">
//                         <div className="w-1 h-10 bg-white rounded-lg"></div>
//                         <h1 className="text-3xl ms-1 text-sky-500 shadow-2xl font-bold">Rooms List</h1>
//                     </div>
//                     <button className="bg-sky-500 rounded-full text-2xl text-white p-3" onClick={onClickHandler}>
//                         Create your room
//                     </button>
//                 </div>
//                 <ul className="space-y-6">
//                     {props.rooms.map(room => <RoomItem key={room.id} room={room}/>)}
//                 </ul>
//             </div>
//             {formIsActive ? <div className="w-screen h-screen bg-black opacity-50  ease-in-out pointer-events-none" id="overlay"></div>
//             : ""}
//             <CreateNewRoomPage cancel={() => {setFormIsActive(false)}}/>
//
//
//         </>
//     );
// };
// export default RoomsList;
import RoomItem from "./room-item/RoomItem.tsx";
import {RoomType} from "../../util/rooms-loader.ts";
import React, {useState} from "react";
import CreateNewRoomPage from "../../pages/CreateNewRoomPage.tsx";

const RoomsList = (props: RoomType) => {
    const [formIsActive, setFormIsActive] = useState(false);

    const onClickHandler = () => {
        setFormIsActive(true);
    };

    return (
        <>
            <div className={`relative ${formIsActive ? "inset-0" : ""}`}>
                <div className="flex justify-between my-8">
                    <div className="flex items-center gap-2">
                        <div className="w-1 h-10 bg-white rounded-lg"></div>
                        <h1 className="text-3xl ms-1 text-sky-500 shadow-2xl font-bold">
                            Rooms List
                        </h1>
                    </div>
                    <button
                        className="bg-sky-500 rounded-full text-2xl text-white p-3"
                        onClick={onClickHandler}
                    >
                        Create your room
                    </button>
                </div>
                <ul className="space-y-6">
                    {props.rooms.map((room) => (
                        <RoomItem key={room.id} room={room}/>
                    ))}
                </ul>
            </div>
            {formIsActive && (
                <CreateNewRoomPage cancel={() => setFormIsActive(false)}/>
            )}
        </>
    );
};

export default RoomsList;

