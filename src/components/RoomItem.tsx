import {Room} from "../util/rooms-loader.ts";


const RoomItem = (props: { room: Room }) => {
    const room = props.room;
    console.log(room)
    return (
        <li className="bg-[#1B1F38] p-3 bg-gradient-to-t from-blue-800 via-blue-900 to-[#1B1F38]">
            <h1 className="text-sky-500 bg-none font-semibold ">Adolf Hitler's <span className="text-white">room</span></h1>
            <div className="flex">
                <div className={`bg-[url(https://upload.wikimedia.org/wikipedia/commons/7/7e/Joseph_Stalin%2C_1950_%28cropped%29.jpg)] 
                bg-cover w-[200px] h-[200px] bg-center rounded-xl`}>
                    {/* Content of your compornent */}
                </div>
                <div className="m-3">
                    <div className="text-white">
                        <h1 className="font-bold text-2xl mb-3 shadow-2xl">Extraordinary Stalin's speeches </h1>
                        <div className="flex space-x-3 items-center font-semibold text-gray-400 text-sm">
                            <div className="flex-shrink-0">Resolver</div>
                            <span className="text-gray-500 inline-block align-middle">·</span>
                            <div className="flex-shrink-0">Album</div>
                            <span className="text-gray-500 inline-block align-middle">·</span>
                            <div className="flex-shrink-0">2004</div>
                            <span className="text-gray-500 inline-block align-middle">·</span>
                            <div className="flex-shrink-0 text-sky-500">Playing</div>
                        </div>
                    </div>
                    <div className="text-sky-500 text-xl font-bold mt-9">
                        <h1 className="my-5 mt-5">Songs listened to <span className="text-white"> : 10</span></h1>
                        <h1>Peoples in room <span className="text-white"> : {room.guests.length}</span></h1>
                    </div>
                </div>
            </div>



        </li>
    );
};
export default RoomItem;