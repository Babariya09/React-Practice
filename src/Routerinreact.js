import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./component/Home";
import About from "./component/About";

function Routerinreact() {
    return (
        <>
            {/* <h1>React Router 6</h1> */}
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Routerinreact;

// ========== Note ===========

// router nu work diffrent pages ne jodva nu hoi che jem ke navbar.
// aa work html thi pan thay anchore na use thi but te vare vare refresh thai jay.
// aathi router no use kari ye siye.
