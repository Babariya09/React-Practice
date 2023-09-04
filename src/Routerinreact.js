import React from "react";
import { BrowserRouter, Route, Routes, Link, Navigate } from 'react-router-dom'
import Home from "./component/Home";
import About from "./component/About";
import Navbar from "./component/Navbar";
import Page404 from "./component/Page404";

function Routerinreact() {
    return (
        <>
            {/* <h1>React Router 6</h1> */}
            <BrowserRouter>
            {/* <Link to="/about">About</Link>
            <br/><br/>
            <Link to="/">Home</Link> */}
            <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    {/* <Route path="/*" element={<Page404 />} /> */}
                    <Route path="/*" element={<Navigate to="/" />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Routerinreact;

// ========== Note ===========

// ==================== Normal Rout ====================

// router nu work diffrent pages ne jodva nu hoi che jem ke navbar.
// aa work html thi pan thay anchore na use thi but te vare vare refresh thai jay.
// aathi router no use kari ye siye.

// =================== Link, Navbar, Anchor Tag =================

// link is anchores.
// Anchore use in Html and link use in React.
// tema kai pan deffrence nathi.
// and tevu nathi ke link khali aamaj use thay tene game tya use kari shako jemke me nevbar,js ma kari che.

// ================== Page404 ================

// jyare url khoti hoi tyare 404 dekhadva ma te path ma nakh vanu /* etle jyare khoti hase tyare tamne aapi deche.

// =============== Navigate ==================

// 404 ni badle tamare khoti url per home page j dekhad vu che to navigate no use thay.
// navigate ni ander to devanu ke tamare kya navigate karav vu che khoti url per.
