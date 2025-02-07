import React from 'react';
import Nav from '../components/Navbar/Nav.jsx';
import Cards from "../components/Cards/Cards.jsx";
import Footer from '../components/Footer/Footer.jsx';

function Album(props) {
    return (
        <>
        <Nav />
        <div><p>C'est ici quon verra les albums de photos quon a créé</p></div>
        <Cards />
        <Footer/>
        </>
    );
}

export default Album;