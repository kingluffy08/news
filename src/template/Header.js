// import React from "react";
import logo from "../assets/images/logo.svg";
import iconMenu from "../assets/images/icon-menu.svg";
import iconClose from "../assets/images/icon-menu-close.svg";
import { useState } from "react";

export default function Header () {
    const [icon, setIcon] = useState(false);
    const shoNav = event =>{
        setIcon(current => !current);
    }


    return(
        <header className="header-container">
            <nav className="logo">
                <img src={logo}></img>
            </nav>
            <div className="icon">
                    <a href="#" onClick={()=> shoNav()}><img  className="icon-menu" src={icon ? iconClose : iconMenu}></img></a>
                </div>
            <nav className={icon ? 'navigation' : 'navigation hide'} id="nav">
                <ul >
                    <li><a href="#">Home</a></li>
                    <li><a href="#">New</a></li>
                    <li><a href="#">Popular</a></li>
                    <li><a href="#">Trending</a></li>
                    <li><a href="#">Categories</a></li>
                </ul>
            </nav>
        </header>
    );

    
}