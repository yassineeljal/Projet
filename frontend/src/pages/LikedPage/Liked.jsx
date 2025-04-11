import React, { useEffect, useState } from 'react';
import Nav from '../../components/Navbar/Nav.jsx';
import { useNavigate } from 'react-router-dom';
import './Liked.css';
import axios from 'axios';

function Liked({ auth, user }) {
  const navigate = useNavigate();
  const [likedImages, setLikedImages] = useState([]);

  useEffect(() => {
    if (!auth) {
      navigate("/Login");
    }
  }, [auth, navigate]);

  useEffect(() => {
    const fetchLikedImages = async () => {
      try {
        const response = await axios.get(`http://localhost:8888/pixios/getLikedImages/${user.username}/${user.password}`);
        if (response.data) {
          setLikedImages(response.data);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des images likées :", error);
      }
    };

    if (auth) {
      fetchLikedImages();
    }
  }, [auth, user]);

  return (
    <>
      <Nav />
      <div className="liked-container">
        <h2>Mes images likées</h2>
        <div className="grid grid-cols-3 gap-12" style={{ padding: "20px" }}>
          {likedImages.map((img, index) => (
            <div key={index} className="w-64 h-80 rounded-lg overflow-hidden shadow-md">
              <img src={img} alt={`liked-${index}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Liked;
