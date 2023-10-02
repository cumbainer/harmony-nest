import {json} from "react-router";
import {redirect} from "react-router-dom";

export const tokenLoader = async () => {
    const baseTokenUrl = "http://localhost:4040/token";

    const userId = new URL(baseTokenUrl).searchParams.get("id");
    const response = await fetch(baseTokenUrl + "?userId=" + userId);

    const tokens = await response.text();
    //todo deal with the secure tokens savings way
    localStorage.setItem("access-key", tokens)
    return redirect("/rooms");
};