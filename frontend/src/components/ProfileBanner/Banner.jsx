import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaEdit } from "react-icons/fa";
import PhotoProfil from '../../assets/profil.avif'
 
function Banner() {
    return (
   
        <div className="relative w-full h-56 bg-gradient-to-r from-blue-500 to-purple-600 text-white flex items-center justify-center shadow-lg  overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative flex items-center space-x-6">
          <img
            src={PhotoProfil}
            alt="Avatar"
            className="w-24 h-24 rounded-full border-4 border-white shadow-md"
          />
          <div>
            <h2 className="text-2xl font-semibold" style={{marginRight:"20px"}}>Christian Horwitz</h2>
            <p className="text-lg">Web Designer</p>
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
            </div>
          </div>
          <a href="/EditProfile">
          <FaEdit className="absolute top-4 right-4 cursor-pointer text-xl text-white hover:text-gray-300"/>
          </a>
        </div>
      </div>
    );
}
 
export default Banner;