import React from "react";
import { Link, Outlet } from "react-router-dom";

function Contact() {
    
    return (
        <>
            <h1>Contact Page!</h1>
            <h2>Here we have some other bussiness!</h2>
            <Link to="company">Company</Link>
            <Link to="channel">Channel</Link>
            <Link to="other">Other</Link>
            <Outlet />
        </>
    )
}

export default Contact;
