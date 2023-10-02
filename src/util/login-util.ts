import {redirect} from "react-router-dom";
import Cookies from "universal-cookie";

export const tokenLoader = async () => {
    const cookies = new Cookies();
    const baseTokenUrl = "http://localhost:4040/token";

    const userId = new URLSearchParams(window.location.search).get("id");
    const response = await fetch(baseTokenUrl + "?userId=" + userId);
    const {accessToken, refreshToken} = await response.json();

    cookies.set("access_token", accessToken, {
        path: "/",
        httpOnly: true
    })
    localStorage.setItem('refresh_token', refreshToken);
    return redirect("/rooms");
};