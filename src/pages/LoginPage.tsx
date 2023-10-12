import Login from "../components/Login.tsx";
import { Form, redirect } from "react-router-dom";

const LoginPage = () => {
    return (
        <Form method="post" className="">
            <Login />
        </Form>
    );
};
export default LoginPage;

export const action = async () => {
    return redirect("http://localhost:4040/oauth2/authorization/spotify");
};
