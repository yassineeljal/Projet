import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from './pages/Profile';

function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/Profile' element={<Profile/>} />

            </Routes>
        </BrowserRouter>
    );
}

export default MyRoutes;