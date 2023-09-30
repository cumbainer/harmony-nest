import {Room} from "../util/rooms-loader.ts";


const RoomItem = (props: { room: Room }) => {
    const room = props.room;
    return (
        <li className="bg-[#1B1F38]">
            <h1 className="text-sky-500">{room.ownerName} <span className="text-white"> room</span></h1>
            <div className="flex">
                <img src={room.image} alt="" />
                <div className="text-white">
                    <h1></h1>

                </div>
            </div>



        </li>
    );
};
export default RoomItem;