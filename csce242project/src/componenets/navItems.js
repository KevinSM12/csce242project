import "../css/navItems.css"
import { Outlet, Link } from "react-router-dom";

const navItems = ()=>{
    return(
        <><ul id="nav-items" className="columns hide">
            <li className="one"><Link to="/">Home</Link></li>
            <li className="one"><Link to="/Recordspage">Records</Link></li>
            <li className="one"><Link to="/about">About</Link></li>
            <li className="one"><Link to="/form">Addition Form</Link></li>
            <li className="one"><Link to="/community">Community</Link></li>
        </ul></>
    );
};

export default navItems;