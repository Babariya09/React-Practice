import React from "react";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';


// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
    return (
        <>
            <BrowserRouter>

                <Link to="/">Home</Link>

                <Link to="/about">About</Link>

                <Link to="/dashboard">Dashboard</Link>

                <Routes>

                    <Route path="/" element={<Home />} >
                    </Route>
                    <Route path="/about" element={<About />} >
                    </Route>
                    <Route path="/dashboard" element={<Dashboard />} >
                    </Route>


                </Routes>
            </BrowserRouter>
            {/* // <Router>

        // </Router> */}
        </>
    );
}

// You can think of these components as "pages"
// in your app.

function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}

function About() {
    return (
        <div>
            <h2>About</h2>
        </div>
    );
}

function Dashboard() {
    return (
        <div>
            <h2>Dashboard</h2>
        </div>
    );
}