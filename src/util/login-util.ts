import
{redirect} from "react-router-dom";
import Cookies from "universal-cookie";
import axios from "axios";

//todo ADD MULTIPLE USERS FUNCTIONALITY
export const tokenLoader = async () => {
    const cookies = new Cookies();

    const hostId = new URLSearchParams(window.location.search).get("id")!;
    const access = new URLSearchParams(window.location.search).get("access")!;
    const refresh = new URLSearchParams(window.location.search).get("refresh")!;
    // const baseTokenUrl
    //     = "http://localhost:4040/token?hostId="+hostId;
    // const response = await axios.get(baseTokenUrl, {
    //
    //     withCredentials: true
    // });
    // const {accessToken, refreshToken} = response.data;


    //todo change later
    cookies.set("access_token", access, {
        path: "/",
        httpOnly: true
    })
    localStorage.setItem("host_id", hostId)
    localStorage.setItem("access_token", access)
    // localStorage.setItem('refresh_token', refreshToken);
    localStorage.setItem('refresh_token', refresh);
    return redirect("/rooms");
};

export const checkUserAuthentication = async () => {
    const hostId = localStorage.getItem("host_id");

    const response = await axios.get("http://localhost:4040/auth/check?hostId=" + hostId, {
        withCredentials: true
    });
    return response.data === true;
};

