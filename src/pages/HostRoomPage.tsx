import { useEffect, useState } from "react";
import Player from "../components/rooms/host-room/Player.tsx";
import useSpotifyApi from "../hooks/useSpotifyApi.tsx";

const makeCapital = (inputText: string) => {
    return inputText?.charAt(0).toUpperCase() + inputText?.slice(1);
};

const HostRoomPage = () => {
    const { spotifyWebApi } = useSpotifyApi();
    const [track, setCurrentPlayingTrack] = useState(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    useEffect(() => {
        if (spotifyWebApi) {
            spotifyWebApi.getMyCurrentPlayingTrack().then((response) => {
                console.log(response.body.item);
                const currentTrack = response.body ? response.body.item : null;
                console.log(currentTrack)
                const playing = response.body
                    ? response.body.is_playing
                    : false;

                setCurrentPlayingTrack(currentTrack);
                setIsPlaying(playing);
            });
        }
    }, [spotifyWebApi]);

    const togglePlayer = () => {
        if (isPlaying) {
            spotifyWebApi.pause();
        } else {
            spotifyWebApi.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="mx-11">
            <div className="flex">
                <div className="w-1/4">
                    <img
                        className="rounded-md"
                        src={
                            track
                                ? track.album.images[0]?.url
                                : "https://www.thepinknews.com/wp-content/uploads/2019/06/billy-herrington.jpg"
                        }
                        alt=""
                    />
                </div>
                <div
                    className="flex-grow bg-gradient-to-t from-blue-950 via-[#1C1F3A] to-[#1B1F38] mx-2 rounded-sm
                        flex items-center justify-center relative"
                >
                    {track ? (
                        <Player
                            isFavourited={true}
                            isPlaying={isPlaying}
                            togglePlayer={togglePlayer}
                        />
                    ) : (
                        <h1 className="text-white font-semibold text-2xl">
                            Nothing is playing here yet...
                        </h1>
                    )}
                </div>
            </div>
            {track && (
                <div className="my-1">
                    <h1 className="text-md text-white font-semibold w-1/4">
                        {track.name}
                    </h1>
                    <div className="flex space-x-3 items-center font-semibold text-gray-500 text-sm my-1">
                        <div className="flex-shrink-0">
                            {makeCapital(track.album.type)}
                        </div>
                        <span className="text-gray-500 inline-block align-middle">
                            ·
                        </span>
                        <div className="flex-shrink-0">
                            {makeCapital(track.album.album_type)}
                        </div>
                        <span className="text-gray-500 inline-block align-middle">
                            ·
                        </span>
                        <div className="flex-shrink-0">
                            {track.album.release_date.slice(0, 4)}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HostRoomPage;
