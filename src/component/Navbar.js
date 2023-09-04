import React from "react";
import { Link } from 'react-router-dom'


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
                <li><Link to="/usernew/raj">Raj</Link></li>
            </ul>
        </>
    )
}

export default Navbar;