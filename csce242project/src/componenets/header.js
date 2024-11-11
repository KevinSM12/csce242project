import '../css/header.css';
import { Outlet, Link } from "react-router-dom";
import React, {useState, useEffect} from "react";

const Header = ()=>{
    
    const [isOpen, setIsOpen] = useState(false);

    const toggle = ()=>{
        setIsOpen(!isOpen);
    };

    return (
        <><div id="main-header">
            <h3>Basketball Records Elite</h3>
            <div id="logo-div">
                <img src="../images/basketball-logo-removebg-preview.png" id="logo" />
            </div>
                <nav id="main-nav">
                <div onClick={toggle} id="toggle-nav" className="hide-big">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                    <ul id="nav-items" className={isOpen ? "columns" : "columns hide"}>
                    <li className="one"><Link to="/">Home</Link></li>
                    <li className="one"><Link to="/Recordspage">Records</Link></li>
                    <li className="one"><Link to="/about">About</Link></li>
                    <li className="one"><Link to="/form">Addition Form</Link></li>
                    <li className="one"><Link to="/community">Community</Link></li>
                </ul>
                </nav>
            </div></>
              
    );
}

export default Header;