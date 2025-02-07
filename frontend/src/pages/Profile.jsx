import React from 'react';
import Nav from '../components/Navbar/Nav';
import Banner from '../components/ProfileBanner/Banner';
import Footer from '../components/Footer/Footer';
import GrosBoutons from '../components/GrosBoutons/GrosBoutons';

function Profile(props) {
    return (
        <>
           <Nav/>
           <Banner/>
           <GrosBoutons/>
           <Footer/>
        </>
    );
}

export default Profile;