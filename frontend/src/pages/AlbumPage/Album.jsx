import React, { useState, useEffect } from 'react';
import Nav from '../../components/Navbar/Nav.jsx';
import { useNavigate } from 'react-router-dom';
import './Album.css';

function Album({ auth }) {
  const navigate = useNavigate();

  const [albums, setAlbums] = useState([]);
  const [newAlbumName, setNewAlbumName] = useState('');

  useEffect(() => {
    if (auth) {
      navigate("/Login");
    }
  }, [navigate, auth]);

  const handleAddAlbum = () => {
    if (newAlbumName.trim()) {
      const newAlbum = {
        id: Date.now(),
        name: newAlbumName,
      };
      setAlbums([...albums, newAlbum]);
      setNewAlbumName('');
      document.getElementById('album-form').style.display = 'none';
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
        <div id="album-form" style={{ display: 'none' }}>
          <input
            type="text"
            value={newAlbumName}
            onChange={handleAlbumNameChange}
            placeholder="Nom de l'album"
          />
          <button onClick={handleAddAlbum}>Ajouter</button>
          <button onClick={() => document.getElementById('album-form').style.display = 'none'}>Annuler</button>
        </div>

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

        <button
          className="add-album-btn"
          onClick={() => document.getElementById('album-form').style.display = 'block'}
        >
          Ajouter un album
        </button>
      </div>
    </>
  );
}

export default Album;
