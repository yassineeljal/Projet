import React, { useEffect } from 'react';
import Nav from '../../components/Navbar/Nav.jsx';
import CardsAL from "../../components/Cards/CardsAL.jsx";
import Footer from '../../components/Footer/Footer.jsx';
import { useNavigate } from 'react-router-dom';


function Album({auth}) {

    const navigate = useNavigate();


    useEffect(() => {
        if (!auth) {
        navigate("/Login");
        }
    }, [navigate])

    return (
        <>
        <Nav />

        <CardsAL />
        <Footer />

        
        </>
    );
}

export default Album;