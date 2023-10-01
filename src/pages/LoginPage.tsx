import Login from "../components/Login.tsx";
import {redirect} from "react-router-dom";

const LoginPage = () => {
    return (
        <Login/>
    );
};
export default LoginPage;

export const action = async () => {

    // const response = await fetch("http://localhost:4040/oauth2/authorization/spotify", {
    //     method: "POST"
    // });
    // console.log(response)

    return redirect("http://localhost:4040/oauth2/authorization/spotify");
};