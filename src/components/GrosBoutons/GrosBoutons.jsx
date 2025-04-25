import React from "react";
import { FaHeart, FaImages } from "react-icons/fa";

function Choix() {
  return (
    <div className="flex justify-center items-center h-100 bg-gradient-to-b from-black via-[#302b63] to-black space-x-16 p-10">
      <a
        href="/Liked"
        className="w-1/3 h-64 bg-transparent border-4 border-[#6a4c93] text-white text-3xl font-bold flex flex-col items-center justify-center rounded-xl shadow-xl hover:bg-[#6a4c93]/10 hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer"
      >
        <FaHeart size={70} />
        <span className="mt-4">Liked</span>
      </a>
      <a
        href="/Album"
        className="w-1/3 h-64 bg-transparent border-4 border-[#6a4c93] text-white text-3xl font-bold flex flex-col items-center justify-center rounded-xl shadow-xl hover:bg-[#6a4c93]/10 hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer"
      >
        <FaImages size={70} />
        <span className="mt-4">Album</span>
      </a>
    </div>
  );
}

export default Choix;
