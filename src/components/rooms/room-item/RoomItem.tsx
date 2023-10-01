import {Room} from "../../../util/rooms-loader.ts";
import RoomImage from "./RoomImage.tsx";
import RoomCurrentSongInfo from "./RoomCurrentSongInfo.tsx";


const RoomItem = (props: { room: Room }) => {
    const room = props.room;

    const itemBackground = room.currentlyIsPlaying ?
        "from-blue-950 via-blue-900 to-[#1B1F38]" : "from-[#1B1F39] to-[#1B1F50]";

    return (
        <li className={`bg-[#1B1F38] relative min-w-[80rem] p-3 bg-gradient-to-t ${itemBackground}`}>
            <h1 className="text-sky-500 bg-none font-semibold mb-3 text-2xl">Adolf Hitler's <span className="text-white">room</span></h1>
            <div className="flex">
                <RoomImage isPlaying={room.currentlyIsPlaying} imageUrl={room.image} />
                <div className="m-3">
                   <RoomCurrentSongInfo room={room}/>
                    <div className="text-sky-500 text-xl font-bold mt-6">
                        <h1 className="my-5 mt-5 ">Songs listened to <span className="text-white"> : 10</span></h1>
                        <h1>Peoples in room <span className="text-white"> : {room.guests.length}</span></h1>
                    </div>
                    <div className="absolute right-0 top-0 p-7 text-lg my-9">
                        <h1 className="text-white">Created <span className="text-sky-500">10 minutes ago</span></h1>
                        <div className="mt-10 font-bold text-center">
                            <button className="p-4 bg-sky-500 rounded-full w-11/12 text-white">Join</button>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};
export default RoomItem;