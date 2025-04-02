import React, { useEffect } from 'react';
import Nav from '../../components/Navbar/Nav.jsx';
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

        <Footer />

        
        </>
    );
}

export default Album;