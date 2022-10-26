import { createBrowserRouter } from "react-router-dom";
import Checkout from "../components/Checkout/Checkout";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Programmes from "../components/Programmes/programmes";
import Register from "../components/Register/Register";
import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(
            "https://lerning-platform-server-sauravbarua.vercel.app/programmings/"
          ),
      },
      {
        path: "/programmings/:id",
        element: <Programmes></Programmes>,
        loader: ({ params }) =>
          fetch(
            `https://lerning-platform-server-sauravbarua.vercel.app/programmings/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
