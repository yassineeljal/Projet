import React from 'react';
import Nav from '../components/Navbar/Nav.jsx';
import CardsAL from "../components/Cards/CardsAL.jsx";
import Footer from '../components/Footer/Footer.jsx';

function Liked(props) {
    return (
        <>
        <Nav />
        <h1 className="text-white text-4xl font-bold mb-8">Nous sommes dans les Liked</h1>

        <CardsAL />
        <Footer />

        

        </>

    );
}

export default Liked;