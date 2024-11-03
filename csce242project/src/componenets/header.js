import '../css/header.css';
import { Outlet, Link } from "react-router-dom";

const header = ()=>{
    return (
        <><div id="main-header">
            <h3>Basketball Records Elite</h3>
            <div id="logo-div">
                <img src="../images/basketball-logo-removebg-preview.png" id="logo" />
            </div>
            <nav id="main-nav">
                <div id="toggle-nav" className="hide-big">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <ul id="nav-items" className="columns hide">
                    <li className="one"><Link to="/">Home</Link></li>
                    <li className="one"><Link to="/recordspage">Records</Link></li>
                    <li className="one"><Link to="/about">About</Link></li>
                    <li className="one"><Link to="/form">Addition Form</Link></li>
                    <li className="one"><Link to="/community">Community</Link></li>
                </ul>
            </nav>
        </div></>
    );
}

export default header;