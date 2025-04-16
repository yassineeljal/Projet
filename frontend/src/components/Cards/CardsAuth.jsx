import React, { useState } from "react";
import "./CardsAuth.css";
import AlbumIcon from "../../assets/album.png";
import LikeIcon from "../../assets/like.png";

function CardsAuth({ image, user }) {
  const [showAlbums, setShowAlbums] = useState(false);
  const [albums, setAlbumms] = useState([])



  const handleAlbumIconClick = (src, e) => {
    e.preventDefault();
    setShowAlbums(true);
  };

  const closeModal = () => {
    setShowAlbums(false);
  };

  return (
    <>
      <div
        className="grid grid-cols-3 gap-12"
        style={{ paddingBottom: "100px", cursor: "pointer", paddingLeft: "20px" }}
      >
        {image.map((carte, i) => (
          <div
            key={i}
            className="w-64 h-80 flex justify-center items-center 
                       rounded-lg overflow-hidden shadow-lg 
                       transform transition duration-300 hover:scale-105"
            id="card"
          >
            <img
              src={AlbumIcon}
              alt="Album"
              id="album"
              onClick={(e) => handleAlbumIconClick(carte.urls.full, e)}
            />
            <img
              src={LikeIcon}
              alt="Like"
              id="like"
              onClick={() => console.log("Clique sur le Like")}
            />

            <img
              src={carte.urls.full}
              name="lien"
              className="w-full h-full object-cover"
              id="image"
              alt="carte"
            />
          </div>
        ))}
      </div>

      {showAlbums && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={closeModal}>
              ✕
            </button>
            <h2 className="modal-title">Choisissez un album</h2>

            {albums.length === 0 ? (
              <p>Aucun album disponible.</p>
            ) : (
              <ul className="album-list">
                {albums.map((album) => (
                  <li key={album.id} className="album-list-item">
                    {album.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default CardsAuth;
