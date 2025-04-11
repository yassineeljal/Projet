import React, { useState, useEffect } from 'react';
import Nav from '../../components/Navbar/Nav.jsx';
import { useNavigate } from 'react-router-dom';
import './Album.css';

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
  


  const handleAddAlbum = () => {
    if (newAlbumName.trim()) {
      const newAlbum = {
        id: Date.now(),
        name: newAlbumName,
      };
      setAlbums([...albums, newAlbum]);
      setNewAlbumName('');
      setShowForm(false); 
    }
  };

  const handleAlbumNameChange = (e) => {
    setNewAlbumName(e.target.value);
  };

  const handleAlbumClick = (albumId) => {
    navigate(`/album/${albumId}`);
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
              onChange={handleAlbumNameChange}
              placeholder="Nom de l'album"
            />
            <button onClick={handleAddAlbum}>Ajouter</button>
            <button onClick={() => setShowForm(false)}>Annuler</button>
          </div>
        )}

        <div className="album-list">
          {albums.map((album) => (
            <div
              key={album.id}
              className="album-item"
              onClick={() => handleAlbumClick(album.id)}
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
