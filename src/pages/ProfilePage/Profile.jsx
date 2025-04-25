import React, { useEffect } from 'react';
import Nav from '../../components/Navbar/Nav';
import Banner from '../../components/ProfileBanner/Banner';
import GrosBoutons from '../../components/GrosBoutons/GrosBoutons';
import Footer from "../../components/Footer/Footer.jsx";
import { useNavigate } from 'react-router-dom';


function Profile({auth, setAuth, userProfile}) {

    const navigate = useNavigate();
  useEffect(() => {
    if (!auth) {
      navigate("/Login");
      
    }
  }, [auth, navigate]);
    return (
        <>
           <Nav auth = {auth} setAuth = {setAuth} />
           <Banner userProfile = {userProfile} />
           <GrosBoutons/>
           <Footer/>
           
        </>
    );
}

export default Profile;

