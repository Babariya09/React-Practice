import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Create from './Create';
import Update from './Update';
import Getapi from './Getapi';

function Main() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/create' element={<Create />}></Route>
                <Route path='/update/:id' element={<Update />}></Route>
                <Route path='/read/:id' element={<Getapi />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

// if show any issue in crud else shoe thi video [ https://youtu.be/SYv61aPSiOo?si=YrJQF-nJzAd9yNSC ].

export default Main
