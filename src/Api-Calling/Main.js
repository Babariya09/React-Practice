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

export default Main
