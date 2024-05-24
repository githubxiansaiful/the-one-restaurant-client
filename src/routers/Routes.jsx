import {
    createBrowserRouter,
} from "react-router-dom";
import Error from "../layout/Error";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },
]);