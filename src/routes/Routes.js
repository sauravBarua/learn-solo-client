import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Programmes from "../components/Programmes/programmes";
import Main from "../layout/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/programmings/:id',
                element: <Programmes></Programmes>
            }
        ]
    }
])