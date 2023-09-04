import React from "react";
import { Link, NavLink } from 'react-router-dom'


function Navbar() {
    return (
        <>
            {/* <h1>React Router Navbar 6</h1> */}


            {/* <Link to="/about">About</Link>
            <br/><br/>
            <Link to="/">Home</Link> */}

            <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/usernew/prince">Prince</Link></li>
                <li><NavLink to="/usernew/raj">Raj</NavLink></li>
                <li><NavLink to="/filter">Filter</NavLink></li>
            </ul>
        </>
    )
}

export default Navbar;