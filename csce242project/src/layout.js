import { Outlet, Link } from "react-router-dom";
import Header from "./componenets/header"

const layout = ()=>{
    return (
        <>
            <Header />

            <Outlet />
        </>
    );
};

export default layout;