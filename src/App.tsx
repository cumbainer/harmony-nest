import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "./pages/RootLayout.tsx";
import RoomsPage from "./pages/RoomsPage.tsx";
import {loader} from "./util/rooms-loader.ts";

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
            {}
        ]
    }
]);

const App = () => {
    return (
        <RouterProvider router={router}/>
    )
}

export default App
