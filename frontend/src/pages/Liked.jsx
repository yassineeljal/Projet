import React from 'react';
import Nav from '../components/Navbar/Nav.jsx';
import Cards from "../components/Cards/Cards.jsx";
import Footer from '../components/Footer/Footer.jsx';

function Liked(props) {
    return (
        <>
        <Nav />
        <div><p>C'est ici quon verra les photos quon a liké</p></div>
        <Cards />
        <Footer/>

        </>

    );
}

export default Liked;