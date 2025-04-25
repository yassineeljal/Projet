import React from "react";
import "./CardsAuth.css";

function CardsHome({ image }) {
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
                       transform transition duration-300 hover:scale-105"
            id="card"
          >
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
    </div>
  );
}

export default CardsHome;
