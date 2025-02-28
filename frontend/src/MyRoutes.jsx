import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from './pages/ProfilePage/Profile';
import Home from './pages/HomePage/Home';
import NotFound from "./pages/NotFoundPage/NotFound"
import Album from './pages/AlbumPage/Album';
import Liked from './pages/LikedPage/Liked';
import Login from "./pages/LoginPage/Login"
import Inscription from "./pages/InscriptionPage/Inscription"
import AboutPixiosPage from './pages/AboutPage/AboutPixiosPage';

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