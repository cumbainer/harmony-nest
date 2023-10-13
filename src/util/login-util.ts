import {redirect} from "react-router-dom";
import axios from "axios";

//todo remove this loader
export const tokenLoader = async () => {
    const hostId = new URLSearchParams(window.location.search).get("id")!;
    localStorage.setItem("host_id", hostId);
    return redirect("/rooms");
};

export const checkUserAuthentication = async () => {
    const hostId = localStorage.getItem("host_id");

    const response = await axios.get(
        "http://localhost:4040/auth/check?hostId=" + hostId,
        {
            withCredentials: true,
        },
    );
    return response.data === true;
};
