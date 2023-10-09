import useAuthToken from "./useAuthToken.tsx";
import {useEffect, useState} from "react";
import SpotifyWebApi from "spotify-web-api-node";
import Cookies from "universal-cookie";

const UseSpotifyApi = () => {
    const token = useAuthToken();
    const [spotifyApi, setSpotifyApi] = useState<SpotifyWebApi>();

    useEffect(() => {
        if (token) {
            const spotifyWebApi = new SpotifyWebApi({
                accessToken: token,
                refreshToken: new Cookies().get("refresh_token"),
            });
            if(spotifyWebApi) {
                setSpotifyApi(spotifyWebApi);
            }
        }
    }, [token]);

    return {
        spotifyWebApi: spotifyApi,

    }
};

export default UseSpotifyApi;