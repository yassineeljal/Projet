import React from 'react';
import Nav from '../components/Navbar/Nav.jsx';
import Cards from "../components/Cards/Cards.jsx";
import Footer from '../components/Footer/Footer.jsx';
import GrosBoutons from '../components/GrosBoutons/GrosBoutons.jsx';

function Album(props) {
    return (
        <>
        <Nav />
        <GrosBoutons />

        <Cards />
        <Footer />

        
        </>
    );
}

export default Album;