import {redirect} from "react-router-dom";
import Cookies from "universal-cookie";

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
    return redirect("rooms");
};

type NewRoom = {
    title: string
}
export const createNewRoom = async (room: NewRoom) => {

    const hostId = localStorage.getItem("host_id");
    const requestRoom = {
        room: room,
        userId: localStorage.getItem("host_id")
    };

    const response = await fetch("http://localhost:4040/api/rooms/new?hostId="+hostId, {
        method: "post",
        body: JSON.stringify(room)
    })
    //todo redo
    const responseData = await response.text();
    return responseData;
};