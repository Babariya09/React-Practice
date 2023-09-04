import React from "react";
import { BrowserRouter, Route, Routes, Link, Navigate } from 'react-router-dom'
import Home from "./component/Home";
import About from "./component/About";
import Navbar from "./component/Navbar";
import Page404 from "./component/Page404";
import Usernew from "./component/Usernew";
import Filter from "./component/Filter";
import Contact from "./component/Contact";
import Company from "./component/Company";
import Channel from "./component/Channel";
import Other from "./component/other";

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

                     {/* ================== Noramal Route ============== */}

                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    {/* <Route path="/*" element={<Page404 />} /> */}
                    <Route path="/usernew/:name" element={<Usernew />} />
                    <Route path="/filter" element={<Filter />} />
                    <Route path="/*" element={<Navigate to="/" />} />

                    {/*  ==================== Nested Route ======================== */}

                    <Route path="/contact" element={<Contact />} >

                        <Route path="company" element={<Company />} />
                        <Route path="channel" element={<Channel />} />
                        <Route path="other" element={<Other />} />

                    </Route>

                    {/*  ==================== Nested Route End ======================== */}

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
// Link ni jagya per Navlink lakho to pan chale exampale in navbar.js.

// ================== Page404 ================

// jyare url khoti hoi tyare 404 dekhadva ma te path ma nakh vanu /* etle jyare khoti hase tyare tamne aapi deche.

// =============== Navigate ==================

// 404 ni badle tamare khoti url per home page j dekhad vu che to navigate no use thay.
// navigate ni ander to devanu ke tamare kya navigate karav vu che khoti url per.

// =============== Daynemic Routes [ Params ] =====================

// https://www.worldometers.info/coronavirus/country/us/
// https://www.worldometers.info/coronavirus/country/india/
// have aa be url che to tema thi tame jovo to matr pachal ni vastuj fare che jem ke us, india aana base per aapan ne aalag aalag value male che to te nej paarams kahevay jeno deta joi ye tenu name athva theni value paramas ma paas karo etle tamni value tamne male.
// aanu exampale Usernew.js ma che

// ================== Active Link ===================

// active link ne style karva ni 2 rit che .
// 1 jyare tame react ni ander koi pan nav par click karcho to tema ek active class lagijay che te active class ne tame style kari shako.
// 2 navlink athva link ni baju ma style={({isActive})=>{return {color: isActive ? 'skyblue' : ''}}};
// style valo part navlink ke link ni baju ma mukvathi te active link ne skyblue kar che.

// ===================== SerchParams and setSerchParmas =================

// https://www.worldometers.info/coronavirus/country/us?price=10;
// have params ma normal name ke tevu hoi pan qureey params ma ?price=10 aavu ghani vaar joyu hache to tene qureey params kevay.
// exampale in Filter.js

// ================== Navigation On click ===============

// button uper navigation kem set thay ?
// exampale make 2 button on home page.
// and aa karva mate use thay use navigate hook.

// ======================== nested Routing ====================

// nested routing etle ek rouing ni ander biji routing.
// exampale in contact page.
// route ma jya path aapvi tya ' / ' nai rakhvano and jya link aapel hoi nested router ni jemke me ama aapi che contect ni ander to tya outlet.

// ================= Use Location ===================

// ek page per thi bija page ma kya kya data gya che state, id extra...
// te badhu useLocation Hooks ni madad thi dekhade che.
// exampale in HomePage.