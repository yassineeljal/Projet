import React, { useEffect, useState } from "react";
import "./CardsAuth.css";
import AlbumIcon from "../../assets/album.png";
import LikeIcon from "../../assets/like.png";
import axios from 'axios';

function CardsAuth({ image }) {
  const [showAlbums, setShowAlbums] = useState(false);
  const [albums, setAlbums] = useState([])
  const [imageUrl, setImageUrl] = useState("")




  const fetchAlbum = async () => {
    try {
      const username = localStorage.getItem("username");
      const response = await axios.post(`http://localhost:8888/album/getAllAlbum/${username}`);
      setAlbums(response.data);
      console.log(response.data)
    } catch (error) {
      console.error("Error fetching album:", error);
    }
  };



  // https://mkyong.com/spring-mvc/spring-requestbody-annotation/
  const addImageToAlbum = async (id) => {
    const picture = { url: imageUrl, id: id }
    try{
      const response = await axios.post(`http://localhost:8888/image/addImageToAlbum`, picture);
      if(response.data){
        console.log("ajout reussi")
      }
    } catch(error) {
      console.error("Error add image:", error);
    }
  }

  const handleAlbumIconClick = (src, e) => {
    e.preventDefault();
    fetchAlbum()
    setImageUrl(src)
    setShowAlbums(true);
  };

  const addImageToLiked = async (src) => {
    const picture = { url: src, username: localStorage.getItem("username") }
    console.log(picture)
    try{
      const response = await axios.post(`http://localhost:8888/image/addImageToLiked`, picture);
      if(response.data){
        console.log("ajout reussi")
      }
    } catch(error) {
      console.error("Error add image:", error);
    }
  }


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
              onClick={() => addImageToLiked(carte.urls.full)}
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
                {albums.map((album, i) => (
                  <li key={i} className="album-list-item" onClick={(e) => addImageToAlbum(i + 1)}>
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
