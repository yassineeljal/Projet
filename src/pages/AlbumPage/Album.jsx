import React, { useState, useEffect } from 'react';
import Nav from '../../components/Navbar/Nav.jsx';
import { useNavigate } from 'react-router-dom';
import './Album.css';
import axios from 'axios';

function Album({ auth, setSelectedAlbum }) {

  const navigate = useNavigate();
  const [albums, setAlbums] = useState([]);
  const [newAlbumName, setNewAlbumName] = useState('');
  const [showForm, setShowForm] = useState(false);
  const API_URL = import.meta.env.VITE_API_URL;

  


  const fetchAlbum = async () => {
    try {
      const username = localStorage.getItem("username");
      const response = await axios.post(`${API_URL}/album/getAllAlbum/${username}`);
      setAlbums(response.data);
    } catch (error) {
      console.error("Error fetching album:", error);
    }
  };


  useEffect(() => {
    if (!auth) {
      navigate("/Login");
    }
    fetchAlbum()
  }, [auth, navigate]);

  const submitNewAlbum = async (e) => {
    e.preventDefault();
    try {
      const username = localStorage.getItem("username");

      const response = await axios.post(`${API_URL}/album/createAlbum/${username}/${newAlbumName}`);
      if (response.data) {
        setNewAlbumName('');
        setShowForm(false);
        window.location.reload();
      }
    } catch (err) {
      console.error("Erreur lors de la création de l'album", err);
    }
  };

  const setAttribut = (e) => {
    setNewAlbumName(e.target.value);
  };

  const openAlbum = (name, e) => {
    e.preventDefault();
    setSelectedAlbum(name)
    navigate("/ImagesAlbum");

  };

  return (
    <>
      <Nav />
      <div className="album-container">
        {showForm && (
          <div className="album-form">
            <input
              type="text"
              value={newAlbumName}
              onChange={setAttribut}
              placeholder="Nom de l'album"
            />
            <button onClick={submitNewAlbum}>Ajouter</button>
            <button onClick={() => setShowForm(false)}>Annuler</button>
          </div>
        )}

        <div className="album-list">
          {albums.map((album, i) => (
            <div
              key={album.id || i}
              className="album-item"
              onClick={(e) => openAlbum(album.name, e)}

            >
              <h3>{album.name}</h3>
            </div>
          ))}

        </div>

        <button className="add-album-btn" onClick={() => setShowForm(true)}>
          Ajouter un album
        </button>
      </div>
    </>
  );
}

export default Album;
