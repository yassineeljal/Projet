import React, { useState, useEffect } from 'react';
import Nav from '../../components/Navbar/Nav.jsx';
import { useNavigate } from 'react-router-dom';
import './Album.css';
import axios from 'axios';

function Album({ auth }) {
  const navigate = useNavigate();

  const [albums, setAlbums] = useState([]);
  const [newAlbumName, setNewAlbumName] = useState('');
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (!auth) {
      navigate("/Login");
    }
  }, [auth, navigate]);

  const submitNewAlbum = async (e) => {
    e.preventDefault();
    try {
      const username = localStorage.getItem("username");
      const response = await axios.post(`http://localhost:8888/album/createAlbum/${username}/${newAlbumName}`);
      if (response.data) {
        setNewAlbumName('');
        setShowForm(false);
        navigate(`/Album`);
      }
    } catch (err) {
      console.error("Erreur lors de la création de l'album", err);
    }
  };

  const setAttribut = (e) => {
    setNewAlbumName(e.target.value);
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
          {albums.map((album) => (
            <div
              key={album.id}
              className="album-item"
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
