import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Profile from './pages/Profile';

function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/Home' element={<Home/>} />
                <Route path='/Profile' element={<Profile/>} />

            </Routes>
        </BrowserRouter>
    );
}

export default MyRoutes;