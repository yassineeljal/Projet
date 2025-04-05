import React, { useEffect } from 'react';
import Nav from '../../components/Navbar/Nav.jsx';
import { useNavigate } from 'react-router-dom';


function Liked({auth}) {

    const navigate = useNavigate();



    useEffect(() => {
        if (auth) {
        navigate("/Login");
        }
    }, [navigate])

    return (
        <>
        <Nav />
        </>

    );
}

export default Liked;