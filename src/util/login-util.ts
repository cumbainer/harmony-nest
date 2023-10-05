import
{redirect} from "react-router-dom";
import Cookies from "universal-cookie";
import axios from "axios";

//todo ADD MULTIPLE USERS FUNCTIONALITY
export const tokenLoader = async () => {
    const cookies = new Cookies();

    const hostId = new URLSearchParams(window.location.search).get("id")!;
    const baseTokenUrl = "http://localhost:4040/token?hostId="+hostId;
    const response = await axios.get(baseTokenUrl, {
        withCredentials: true
    });
    const {accessToken, refreshToken} = response.data;


    cookies.set("access_token", accessToken, {
        path: "/",
        httpOnly: true
    })
    localStorage.setItem("host_id", hostId)
    localStorage.setItem('refresh_token', refreshToken);
    return redirect("/rooms");
};

export const checkUserAuthentication = async () => {
    const hostId = localStorage.getItem("host_id");

    const response = await axios.get("http://localhost:4040/auth/check?hostId=" + hostId, {
        withCredentials: true
    });
    return response.data === true;
};

