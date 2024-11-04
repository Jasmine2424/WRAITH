import React from "react";
import banner from "/Users/jasmineleon/my-react-app/src/banner.jpg";
import mapPlaceholder from "/Users/jasmineleon/my-react-app/src/mapPlaceholder.jpg";
import "../App.css";

function Home() {
    return (
        <div>
            <div className="Home">
            <h1 className="absolute text-6xl text-center">placeholder</h1>
                <img className="map w-full h-full object-cover" src={mapPlaceholder} alt="map placeholder"/>
            </div>

        <div className="flex flex-col items-center justify-center legend bg bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800 bg-bottom h-15 static">
        <ul className="flex ">
            <li className="very-low-risk">
                <div>
                    <span className="circle bg-red-300"></span>
                    <span className="circle-label">Very Low</span>
                </div>
            </li>
            <li className="low-risk">
                <div>
                    <span className="circle bg-red-400"></span>
                    <span className="circle-label">Low</span>
                </div>
            </li>
            <li className="medium-risk">
                <div>
                    <span className="circle bg-red-500"></span>
                    <span className="circle-label">Medium</span>
                </div>
            </li> 
            <li className="high-risk">
                <div>
                    <span className="circle bg-red-700"></span>
                    <span className="circle-label">High</span>
                </div>
            </li>
            <li className="very-high-risk">
                <div>
                    <span className="circle  bg-red-900"></span>
                    <span className="circle-label">Very High</span>
                </div>
            </li>
        </ul>
        </div>
      </div>

        
    );
}

export default Home;