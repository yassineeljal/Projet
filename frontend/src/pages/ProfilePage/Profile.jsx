import React, { useEffect } from 'react';
import Nav from '../../components/Navbar/Nav';
import Banner from '../../components/ProfileBanner/Banner';
import GrosBoutons from '../../components/GrosBoutons/GrosBoutons';
import { useNavigate } from 'react-router-dom';


function Profile({auth, setAuth}) {

    const navigate = useNavigate();

    useEffect(() => {
        if (auth) {
        navigate("/Login");
        }
    }, [navigate])

   
    return (
        <>
           <Nav auth = {auth} setAuth = {setAuth} />
           <Banner/>
           <GrosBoutons/>
        </>
    );
}

export default Profile;

/**
 *  if (!auth) {
        window.location.href="/Login";
        return null;
    }
 */