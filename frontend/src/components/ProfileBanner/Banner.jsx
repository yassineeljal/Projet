import React, { useState, useEffect, useRef } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaEdit } from "react-icons/fa";
import profilePic from '../../assets/profil.avif'; 

function Banner({ userProfile }) {
  const [profileImage, setProfileImage] = useState(localStorage.getItem('profileImage') || profilePic);
  
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (profileImage !== profilePic) {
      localStorage.setItem('profileImage', profileImage);
    }
  }, [profileImage]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result); 
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.value = null; // Réinitialise la valeur pour que le même fichier puisse être sélectionné plusieurs fois
    fileInputRef.current.click(); 
  };

  

  return (
    <div className="relative w-full h-56 bg-gradient-to-r from-blue-500 to-purple-600 text-white flex items-center justify-center shadow-lg overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="relative flex items-center space-x-6">
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept="image/*"
          onChange={handleImageChange}
        />

        {/* Image de profil cliquable */}
        <div className="relative group">
          <img
            src={profileImage}
            alt="Avatar"
            className="w-24 h-24 rounded-full border-4 border-white shadow-md cursor-pointer transition duration-300 group-hover:brightness-50"
            onClick={triggerFileInput}
          />
          {/* Icône d'édition, visible au survol */}
          <FaEdit className="absolute inset-0 m-auto text-3xl text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
        </div>

        {/* Infos utilisateur */}
        <div>
          <h2 className="text-2xl font-semibold mr-5">
            {userProfile.username}
          </h2>
          <div className="mt-2 flex space-x-3">
            <a href="*" className="text-white hover:text-gray-300">
              <FaFacebook size={20} />
            </a>
            <a href="*" className="text-white hover:text-gray-300">
              <FaTwitter size={20} />
            </a>
            <a href="*" className="text-white hover:text-gray-300">
              <FaInstagram size={20} />
            </a>
            <FaEdit className="text-xl text-white cursor-pointer hover:text-gray-300" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
