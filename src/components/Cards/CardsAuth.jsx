import React, { useEffect, useState } from "react";
import "./CardsAuth.css";
import AlbumIcon from "../../assets/album.png";
import LikeIcon from "../../assets/like.png";
import axios from 'axios';

function CardsAuth({ image }) {
  const [showAlbums, setShowAlbums] = useState(false);
  const [albums, setAlbums] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const API_URL = import.meta.env.VITE_API_URL;

  const fetchAlbum = async () => {
    try {
      const username = localStorage.getItem("username");
      const response = await axios.post(`${API_URL}/album/getAllAlbum/${username}`);
      setAlbums(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching album:", error);
    }
  };

  const addImageToAlbum = async (id) => {
    const picture = { url: imageUrl, id: id };
    try {
      const response = await axios.post(`${API_URL}/image/addImageToAlbum`, picture);
      if (response.data) {
        console.log("ajout réussi");
        setShowAlbums(false);
      }
    } catch (error) {
      console.error("Error add image:", error);
    }
  };

  const handleAlbumIconClick = (src, e) => {
    e.preventDefault();
    fetchAlbum();
    setImageUrl(src);
    setShowAlbums(true);
  };

  const addImageToLiked = async (src) => {
    const picture = { url: src, username: localStorage.getItem("username") };
    console.log(picture);
    try {
      const response = await axios.post(`${API_URL}/image/addImageToLiked`, picture);
      if (response.data) {
        console.log("ajout réussi");
      }
    } catch (error) {
      console.error("Error add image:", error);
    }
  };

  const closeModal = () => {
    setShowAlbums(false);
  };

  return (
    <div className="bg-gradient-to-r from-[#1f1c2c] via-[#302b63] to-[#24243e] min-h-screen text-white">
      <div
        className="grid grid-cols-3 gap-12"
        style={{ paddingBottom: "100px", cursor: "pointer", paddingLeft: "20px" }}
      >
        {image.map((carte, i) => (
          <div
            key={i}
            className="w-64 h-80 flex justify-center items-center 
                       rounded-lg overflow-hidden shadow-lg 
                       transform transition duration-300 hover:scale-105 relative"
            id="card"
          >
            <img
              src={AlbumIcon}
              alt="Album"
              id="album"
              onClick={(e) => handleAlbumIconClick(carte.urls.full, e)}
              className="absolute top-2 left-2 w-8 h-8 z-10 cursor-pointer"
            />
            <img
              src={LikeIcon}
              alt="Like"
              id="like"
              onClick={() => addImageToLiked(carte.urls.full)}
              className="absolute top-2 right-2 w-8 h-8 z-10 cursor-pointer"
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
        <div className="modal-overlay fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-60 z-20">
          <div className="modal-content bg-white text-black p-6 rounded-lg shadow-lg w-96">
            <button className="close-btn text-red-600 text-xl float-right" onClick={closeModal}>
              ✕
            </button>
            <h2 className="modal-title text-xl font-bold mb-4">Choisissez un album</h2>

            {albums.length === 0 ? (
              <p>Aucun album disponible.</p>
            ) : (
              <ul className="album-list space-y-2">
                {albums.map((album, i) => (
                  <li
                    key={i}
                    className="album-list-item bg-gray-100 hover:bg-gray-300 p-2 rounded cursor-pointer"
                    onClick={() => addImageToAlbum(i + 1)}
                  >
                    {album.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default CardsAuth;
