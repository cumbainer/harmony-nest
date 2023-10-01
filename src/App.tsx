import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "./pages/RootLayout.tsx";
import RoomsPage from "./pages/RoomsPage.tsx";
import {loader} from "./util/rooms-loader.ts";
import LoginPage, {action as loginAction} from "./pages/LoginPage.tsx";
import Token from "./pages/Token.tsx";
import {tokenLoader} from "./util/login-util.ts";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                path: "rooms",
                element: <RoomsPage/>,
                loader: loader
            },
            {
                path: "/login",
                element: <LoginPage/>,
                action: loginAction
            },
            {
                path: "/token",
                element: <Token />,
                loader: tokenLoader
                // action: loginAction
            },

        ]
    }
]);

const App = () => {
    return (
        <RouterProvider router={router}/>
    )
}

export default App
