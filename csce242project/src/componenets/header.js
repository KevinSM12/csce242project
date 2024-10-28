import '../css/header.css';
import { Outlet, Link } from "react-router-dom";

const header = ()=>{
    return (
        <><h3>Basketball Records Elite</h3><div id="logo-div">
            <img src="images/basketball-logo-removebg-preview.png" id="logo" />
            </div><nav id="main-nav">
                <div id="toggle-nav" class="hide-big">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <ul id="nav-items" class="columns hide">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/recordspage">Reocrds</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/form">Addition Form</Link></li>
                    <li><Link to="/community">Community</Link></li>
                </ul>
            </nav></>
    );
}

export default header;