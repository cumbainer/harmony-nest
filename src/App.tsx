import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ProtectedRoutesLayout from "./pages/ProtectedRoutesLayout.tsx";
import RoomsPage from "./pages/RoomsPage.tsx";
import LoginPage, {action as loginAction} from "./pages/LoginPage.tsx";
import Token from "./pages/Token.tsx";
import {tokenLoader} from "./util/login-util.ts";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import AuthContextProvider from "./store/AuthContextProvider.tsx";
import HostRoomPage from "./pages/HostRoomPage.tsx";
import {Theme} from "@radix-ui/themes";

const router = createBrowserRouter([
    {
        path: "/auths",
        element: <LoginPage/>,
        action: loginAction
    },
    {
        path: "/rooms",
        element: <RoomsPage/>,
        // id: "rooms"
    },

    {
        path: "/",
        element: <ProtectedRoutesLayout/>,
        children: [
            {
                // path: "/rooms",
                // id: "rooms",
                children: [

                    {
                        id: "rooms",
                        path: "/rooms/:roomId",
                        element: <HostRoomPage/>
                    }
                ]
            },
            {
                //todo dispay some text that user is succesfully logined
                path: "auth",
                // element: <LoginPage/>,
                // action: loginAction,
                children: [
                    {
                        //todo make this page only available for redirect
                        path: "token",
                        element: <Token/>,
                        loader: tokenLoader
                    }
                ]
            },
        ]
    }
]);
const client = new QueryClient();

const App = () => {
    return (
        <Theme>
            <AuthContextProvider>

                <QueryClientProvider client={client}>
                    <RouterProvider router={router}/>
                </QueryClientProvider>
            </AuthContextProvider>
        </Theme>

    )
}

export default App
