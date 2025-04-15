import React, { useState, useEffect } from 'react';
import Nav from '../../components/Navbar/Nav.jsx';
import { useNavigate } from 'react-router-dom';
import './Album.css';

function Album({ auth }) {
  const navigate = useNavigate();

  const [albums, setAlbums] = useState([]);
  const [newAlbumName, setNewAlbumName] = useState({
    id:"",
    name:"",
  });
  const [showForm, setShowForm] = useState(false); 

  useEffect(() => {
    if (auth) {
      navigate("/Login");
    }
  }, [auth, navigate]);
  

  const submitNewAlbum = (e) =>{
    e.preventDefault();
    axios.post("http://localhost:8888/pixios/createAlbum", newAlbumName)
        .then(() =>{
          setShowForm(false); 
          navigate(`/Album`);
        }).catch((error) =>{
        console.log(error);
    });
    
  }

  const setAttribut = (e) => {
    const value = e.target.value;
    setNewAlbumName({...newAlbumName, [e.target.name]: value})
  }


  return (
    <>
      <Nav />
      <div className="album-container">
        {showForm && (
          <div className="album-form">
            <input
              type="text"
              value={newAlbumName.name}
              onChange={(e) => setAttribut(e)}
              placeholder="Nom de l'album"
            />
            <button onClick={(e) => submitNewAlbum(e)}>Ajouter</button>
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
