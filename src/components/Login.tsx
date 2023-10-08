import {Form} from "react-router-dom";
import {useContext} from "react";
import AuthContext from "../store/auth-context.tsx";

const Login = () => {
    const authContext = useContext(AuthContext);

    return (
        <Form method="post">
            <div className="overflow-x-hidden h-screen absolute flex flex-col top-0 left-1/3">
                {authContext.authenticationError &&
                    <div className="h-50 bg-red-700 text-white text-xl flex items-center justify-center w-screen">
                        Please login via Spotify first, before creating room!
                    </div>}
                <div className="flex flex-col items-center justify-center flex-grow">
                    <button className="text-5xl text-center text-white border-3 bg-gradient-to-r from-sky-600 via-sky-500
                    to-blue-700 p-5 rounded-lg shadow-2xl shadow-black">
                        <h1>Login with Spotify</h1>
                    </button>
                </div>
            </div>
        </Form>
    );
};
export default Login;