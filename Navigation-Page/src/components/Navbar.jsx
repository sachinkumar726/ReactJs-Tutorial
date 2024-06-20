import React from "react";
import "./Navbar.css"

const Navbar = () =>{
    return(
        <div className="navbar">
            <nav>
                <ul>
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#About us">About us</a></li>
                    <li><a href="#Contact us">Contact Us</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar