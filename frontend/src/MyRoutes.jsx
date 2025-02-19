import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from './pages/Profile';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Album from './pages/Album';
import Liked from './pages/Liked';
import Login from './pages/Login';
import Inscription from './pages/Inscription';
import AboutPixiosPage from './pages/AboutPixiosPage';

function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/Login' element={<Login/>} />
                <Route path='/Inscription' element={<Inscription/>} />
                <Route path='/Profile' element={<Profile/>} />
                <Route path='/Album' element={<Album/>} />
                <Route path='/Liked' element={<Liked/>} />
                <Route path='*' element={<NotFound/>} />
                <Route path='/AboutPixiosPage' element={<AboutPixiosPage/>} />




            </Routes>
        </BrowserRouter>
    );
}

export default MyRoutes;