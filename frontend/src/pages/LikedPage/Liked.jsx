import React, { useEffect } from 'react';
import Nav from '../../components/Navbar/Nav.jsx';
import CardsAL from "../../components/Cards/CardsAL.jsx";
import { useNavigate } from 'react-router-dom';


function Liked({auth}) {

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
        </>

    );
}

export default Liked;