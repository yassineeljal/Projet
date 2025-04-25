import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from './pages/ProfilePage/Profile';
import Home from './pages/HomePage/Home';
import NotFound from "./pages/NotFoundPage/NotFound";
import Album from './pages/AlbumPage/Album';
import Liked from './pages/LikedPage/Liked';
import Login from "./pages/LoginPage/Login";
import Inscription from "./pages/InscriptionPage/Inscription";
import AboutPixiosPage from './pages/AboutPage/AboutPixiosPage';
import HomeClient from './pages/HomeClient/HomeClient';
import ClientService from './utils/ClientService';
import ImagesAlbum from './pages/AlbumPage/ImagesAlbum';

function MyRoutes() {
  const {
    auth,
    setAuth,
    authReady,
    user,
    setUser,
    selectedAlbum,
    setSelectedAlbum
  } = ClientService();

  if (!authReady) {
    return <div>Chargement...</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home auth={auth} />} />
        <Route path='/HomeClient' element={<HomeClient auth={auth} user={user} />} />
        <Route path='/Login' element={<Login auth={auth} setAuth={setAuth} user={user} setUser={setUser} />} />
        <Route path='/Profile' element={<Profile auth={auth} setAuth={setAuth} />} />
        <Route path='/Inscription' element={<Inscription auth={auth} setAuth={setAuth} />} />
        <Route path='/Album' element={<Album auth={auth} setSelectedAlbum={setSelectedAlbum} />} />
        <Route path='/Liked' element={<Liked auth={auth} />} />
        <Route path='/AboutPixiosPage' element={<AboutPixiosPage />} />
        <Route path='/ImagesAlbum' element={<ImagesAlbum selectedAlbum={selectedAlbum} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MyRoutes;
