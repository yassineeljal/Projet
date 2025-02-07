import React from 'react';
import Nav from '../components/Navbar/Nav.jsx';
import CardsAL from "../components/Cards/CardsAL.jsx";
import Footer from '../components/Footer/Footer.jsx';

function Album(props) {
    return (
        <>
        <Nav />
        <h1 className="text-white text-4xl font-bold mb-8">Nous sommes dans l'album</h1>

        <CardsAL />
        <Footer />

        
        </>
    );
}

export default Album;