import {redirect} from "react-router-dom";
import Cookies from "universal-cookie";

//todo ADD MULTIPLE USERS FUNCTIONALITY
export const tokenLoader = async () => {
    const cookies = new Cookies();
    const baseTokenUrl = "http://localhost:4040/token";

    const hostId = new URLSearchParams(window.location.search).get("id")!;
    const response = await fetch(baseTokenUrl + "?hostId=" + hostId);
    const {accessToken, refreshToken} = await response.json();

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
    const refreshToken = localStorage.getItem("refresh_token");
    const response = await fetch("http://localhost:4040/auth/check?hostId=" + hostId + "&refreshToken=" + refreshToken);

    const isAuthenticated = await response.text();
    return isAuthenticated === "true";
};

