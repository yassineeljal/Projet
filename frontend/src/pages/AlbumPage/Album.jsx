import React, { useEffect } from 'react';
import Nav from '../../components/Navbar/Nav.jsx';
import { useNavigate } from 'react-router-dom';


function Album({auth}) {

    const navigate = useNavigate();


    useEffect(() => {
        if (auth) {
        navigate("/Login");
        }
    }, [navigate])

    return (
        <>
        <Nav />
             <div className="grid grid-cols-4 gap-12  " style={{paddingBottom:"100px", paddingLeft:"20px"}}>
  {image.slice(0, 8).map((carte, i) => (
    <div
      key={i}
      className="w-64 h-80 flex justify-center items-center rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
    >
      <img src={carte.urls.full} className="w-full h-full object-cover" />
    </div>
  ))}
</div>

        
        </>
    );
}

export default Album;