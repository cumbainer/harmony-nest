import { Room } from "../../../util/request-functions.ts";

const RoomCurrentSongInfo = (props: { room: Room }) => {
    return (
        <>
            {props.room.currentlyIsPlaying ? (
                <div className="text-white">
                    <h1 className="font-bold text-3xl mb-3 line-clamp-6">
                        {props.room.title}
                    </h1>
                    <div className="flex space-x-3 items-center font-semibold text-gray-400 text-md">
                        <div className="flex-shrink-0">Resolver</div>
                        <span className="text-gray-500 inline-block align-middle">
                            ·
                        </span>
                        <div className="flex-shrink-0">Album</div>
                        <span className="text-gray-500 inline-block align-middle">
                            ·
                        </span>
                        <div className="flex-shrink-0">2004</div>
                        <span className="text-gray-500 inline-block align-middle">
                            ·
                        </span>
                        <div className="flex-shrink-0 text-sky-500">
                            {props.room.currentlyIsPlaying
                                ? "Playing"
                                : "On pause"}
                        </div>
                    </div>
                </div>
            ) : (
                <p className="text-xl text-white my-3">
                    Nothing is playing here yet...
                </p>
            )}
        </>
    );
};

export default RoomCurrentSongInfo;
