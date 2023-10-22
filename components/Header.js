import React from "react";
import "../App.css"
import { Link } from "react-router-dom";

function Header()
{
    return(
        <>
        <div className="main-header">
            <ul>
                <Link to="/">
                <li> Home</li>
                </Link>
                <li>contact</li>
                <Link to="/About">
                <li>About</li>
                </Link>
            </ul>
        </div>
        </>
    )
}
export default Header;