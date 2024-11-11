import '../css/header.css';
import { Outlet, Link } from "react-router-dom";
import ToggleNav from "../componenets/toggleNav";
import NavItems from "../componenets/navItems";
import React, {useState, useEffect} from "react";

const Header = ()=>{
  
    const [visible,setVisbility] = useState("hide");
    

    return (
        <><div id="main-header">
            <h3>Basketball Records Elite</h3>
            <div id="logo-div">
                <img src="../images/basketball-logo-removebg-preview.png" id="logo" />
            </div>
            <nav id="main-nav">
                <ToggleNav onClick="setVisbility()" />
                <NavItems />
            </nav>
        </div></>
              
    );
}

export default Header;