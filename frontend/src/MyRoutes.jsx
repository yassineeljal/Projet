import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from './pages/Profile';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Album from './pages/Album';
import Liked from './pages/Liked';

function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/Profile' element={<Profile/>} />
                <Route path='/Album' element={<Album/>} />
                <Route path='/Liked' element={<Liked/>} />
                <Route path='*' element={<NotFound/>} />


            </Routes>
        </BrowserRouter>
    );
}

export default MyRoutes;