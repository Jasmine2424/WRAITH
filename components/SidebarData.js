import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";


export const SidebarData = [
    {
        title: "Home",
        path:"/",
        icon: <AiIcons.AiFillHome/>,
        cName: "nav-text",
    },
    {
        title: "More Information",
        path:"/MoreInformation",
        icon: <FaIcons.FaInfo/>,
        cName: "nav-text",
    },
    {
        title: "About Us",
        path:"/AboutUs",
        icon: <AiIcons.AiOutlineTeam/>,
        cName: "nav-text",
    },
    {
        title: "Login",
        path:"/Login",
        icon: <AiIcons.AiOutlineUser/>,
        cName: "nav-text",
    },
   
    ];