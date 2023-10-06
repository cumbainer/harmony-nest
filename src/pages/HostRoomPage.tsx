import SpotifyWebApi from "spotify-web-api-node";
import Cookies from "universal-cookie";
import {useEffect, useState} from "react";

const spotifyWebApi = new SpotifyWebApi({
    clientId: "3ead34cb4e37456b9fce526e1ef6f336",

    accessToken: new Cookies().get("access_token"),
    refreshToken: new Cookies().get("refresh_token"),

})

const HostRoomPage = () => {
    const [playerr, setPlayer] = useState();

    spotifyWebApi.play();

    useEffect(() => {

        const script = document.createElement("script");
        script.src = "https://sdk.scdn.co/spotify-player.js";
        script.async = true;

        document.body.appendChild(script);

        window.onSpotifyWebPlaybackSDKReady = () => {

            const player = new window.Spotify.Player({
                name: 'Web Playback SDK',
                getOAuthToken: cb => { cb(localStorage.getItem("access_token")!); },
                volume: 0.5
            });

            setPlayer(player);

            player.addListener('ready', ({ device_id }) => {
                console.log('Ready with Device ID', device_id);
            });

            player.addListener('not_ready', ({ device_id }) => {
                console.log('Device ID has gone offline', device_id);
            });

            player.connect();
        };
    }, []);

    return (
        <div>

        </div>
    );
};

export default HostRoomPage;