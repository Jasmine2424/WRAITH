import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  createRoutesFromElements,
} from "react-router-dom";
import MoreInformation from "./Routes/More Information";
import AboutUs from "./Routes/About Us";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./Routes/Home";
import Login from "./Routes/Login.js";
import Signup from "./Routes/Signup";



const AppLayout = () => (
    <>
    <Navbar/>
    <Outlet/>
    </>
);

const router = createBrowserRouter([
    {
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "MoreInformation",
        element: <MoreInformation/>,
      },
      {
        path: "AboutUs",
        element: <AboutUs/>,
      },
      {
        path: "Login",
        element: <Login/>,
      },
      {
        path: "Signup",
        element: <Signup/>,
      },
    ],
   }, 
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);