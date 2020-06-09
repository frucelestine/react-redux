import React from "react";
import { Link } from "react-router-dom";

const NavItems = () => {
    return ( 
        <>
        <nav className="navbar navbar-light bg-light d-flex justify-content-center">
            <Link to="/signin" className="nav-link">
                Sign Out
            </Link>
            <Link to="/signup" className="nav-link">
                Sign Up
            </Link>
            <Link to="/signin" className="nav-link">
                Sign In
            </Link>
        </nav>
        </>
     );
}
 
export default NavItems;