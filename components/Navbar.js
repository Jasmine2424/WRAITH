import React, {useState} from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {Link} from "react-router-dom";
import {SidebarData} from "./SidebarData";
import "../App.css";
import {IconContext} from "react-icons";
import WRAITH_Logo from "/Users/jasmineleon/my-react-app/src/WRAITH_Logo_by_Itself.png";


function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return(
        <>
        <IconContext.Provider value={{ color: "undefined"}}>
            <div className="navbar flex items-center justify-between  bg bg-gradient-to-r from-blue-800 via-blue-500 to-blue-800">
                <Link to="#" className="menu-bars">
                <FaIcons.FaBars onClick={showSidebar}/>
                </Link>
            <div className="flex flex-row w-200 items-center">
                <img className="w-12 h-12" src={WRAITH_Logo} alt="logo"/>
                <h1 className="font-bold font-mono text-2xl">W.R.A.I.T.H</h1>
                
            </div>
                
               <p></p>
            </div>
            <nav className={sidebar ? "nav-menu active " : "nav-menu"}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle ">
                        <Link to="#" className="menu-bars">
                            <AiIcons.AiOutlineClose className="text-black"/>
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return(
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </IconContext.Provider>
        </>
    );
}

export default Navbar;