import {Room} from "../util/rooms-loader.ts";


const RoomItem = (props: { room: Room }) => {
    const room = props.room;
    console.log(room)
    const roomImageStyle = {
        backgroundImage: `url(${room.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '200px',
        height: '200px',
        borderRadius: '10px',
    };

    return (
        <li className="bg-[#1B1F38] p-3 bg-gradient-to-t from-blue-950 via-blue-900 to-[#1B1F38] relative min-w-[80rem]">
            <h1 className="text-sky-500 bg-none font-semibold mb-3 text-2xl">Adolf Hitler's <span className="text-white">room</span></h1>
            <div className="flex">
                <div style={roomImageStyle}></div>
                <div className="m-3">
                    <div className="text-white">
                        <h1 className="font-bold text-3xl mb-3 line-clamp-6
                        ">{room.title}</h1>
                        <div className="flex space-x-3 items-center font-semibold text-gray-400 text-md">
                            <div className="flex-shrink-0">Resolver</div>
                            <span className="text-gray-500 inline-block align-middle">·</span>
                            <div className="flex-shrink-0">Album</div>
                            <span className="text-gray-500 inline-block align-middle">·</span>
                            <div className="flex-shrink-0">2004</div>
                            <span className="text-gray-500 inline-block align-middle">·</span>
                            <div className="flex-shrink-0 text-sky-500">Playing</div>
                        </div>
                    </div>
                    <div className="text-sky-500 text-xl font-bold mt-6">
                        <h1 className="my-5 mt-5 ">Songs listened to <span className="text-white"> : 10</span></h1>
                        <h1>Peoples in room <span className="text-white"> : {room.guests.length}</span></h1>
                    </div>
                    <div className="absolute right-0 top-0 p-7 text-lg my-9">
                        <h1 className="text-white">Created <span className="text-sky-500">10 minutes ago</span></h1>
                        <div className="mt-10 font-bold ">
                            <button className="p-4 bg-sky-500 rounded-full w-11/12 font-bold">Join</button>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};
export default RoomItem;