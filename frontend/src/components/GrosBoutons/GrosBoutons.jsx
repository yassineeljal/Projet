import React from "react";
import { FaHeart, FaImages } from "react-icons/fa";

function Choix(props) {
    return (
<div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-black via-gray-800 to-black space-x-16 p-10">

        <a
          href="/Album"
          className="w-1/3 h-64 bg-gray-500 text-white text-3xl font-bold flex flex-col items-center justify-center rounded-xl shadow-xl hover:bg-blue-300 transition cursor-pointer"
        >
          <FaHeart size={70} />
          <span className="mt-4">Liked</span>
        </a>
        <a
          href="/Album"
          className="w-1/3 h-64 bg-gray-500 text-white text-3xl font-bold flex flex-col items-center justify-center rounded-xl shadow-xl hover:bg-blue-300 transition cursor-pointer"
        >
          <FaImages size={70} />
          <span className="mt-4">Album</span>
        </a>
      </div>
    );
}

export default Choix;