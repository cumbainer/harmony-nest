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
export const createNewRoom =  async (room: NewRoom) => {

    // const hostId = localStorage.getItem("host_id");
    const requestRoom = {
        roomTitle: room.title,
        hostId: localStorage.getItem("host_id")
    };
    const response = await fetch("http://localhost:4040/api/rooms/new", {
        method: "POST",
        body: JSON.stringify(requestRoom),
        headers: {
            'Content-Type': 'application/json',
            // "Access-Control-Allow-Origin": "*",
        },
    })
    //todo redo
    // const responseData = await response.text();
    // return responseData;

    // fetch("http://localhost:4040/api/rooms/new", {
    //     method: "POST",
    //     body: JSON.stringify(requestRoom),
    //     headers: {
    //         'Content-Type': 'application/json',
    //         "Access-Control-Allow-Origin": "*",
    //         "Access-Control-Allow-Methods": "POST"
    //     },
    // })
    //     .then(function(response) {
    //         return response.json();
    //     })
    //     .then(function(responseData) {
    //         return responseData;
    //     })
    //     .catch(function(error) {
    //         console.error(error);
    //     });

};