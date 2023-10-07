import SpotifyWebApi from "spotify-web-api-node";
import Cookies from "universal-cookie";
import {useEffect, useState} from "react";
import useAuth from "../hooks/useAuth.tsx";

const makeCapital = (inputText: string) => {

    return inputText?.charAt(0).toUpperCase() + inputText?.slice(1);
}
const HostRoomPage = () => {
    const token = useAuth();
    const [track, setCurrentPlayingTrack] = useState();

    useEffect(() => {
        if (token) {
            const spotifyWebApi = new SpotifyWebApi({
                accessToken: token,
                refreshToken: new Cookies().get("refresh_token"),
            });

            spotifyWebApi.getMyCurrentPlayingTrack().then((track) => {
                console.log(track.body)
                setCurrentPlayingTrack(track.body.item);
            });
        }
    }, [token]);

    //todo move this logic somewhere else


    return (
        <>
            <div className="mx-11">
                <div className="flex">
                    <div className="w-1/4">
                        <img className="rounded-md" src={track?.album.images[0].url} alt=""/>

                    </div>
                    <div className="flex-grow bg-gradient-to-t from-blue-950 via-[#1C1F3A] to-[#1B1F38] mx-2 rounded-sm">
                        Content inside the red div
                    </div>
                </div>
                <div className="my-1">
                    <h1 className="text-md text-white font-semibold">{track?.name}</h1>
                    <div className="flex space-x-3 items-center font-semibold text-gray-500 text-sm my-1">
                        <div className="flex-shrink-0">{makeCapital(track?.album.type)}</div>
                        <span className="text-gray-500 inline-block align-middle">·</span>
                        <div className="flex-shrink-0">{makeCapital(track?.album.album_type)}</div>
                        <span className="text-gray-500 inline-block align-middle">·</span>
                        <div className="flex-shrink-0">{track?.album.release_date.slice(0, 4)}</div>
                        <span className="text-gray-500 inline-block align-middle">·</span>
                        <div className="flex-shrink-0 text-sky-500">playing</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HostRoomPage;
