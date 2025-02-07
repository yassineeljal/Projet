import React from "react";
import Img1 from "../../assets/photo.jpg";

const cards = [
  { id: 1, image: Img1 },
  { id: 2, image: Img1 },
  { id: 3, image: Img1 },
  { id: 4, image: Img1 },
  { id: 5, image: Img1 },
  { id: 6, image: Img1 },
  { id: 7, image: Img1 },
  { id: 8, image: Img1 },
];

function CardGallery() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black via-gray-800 to-black p-10">
     
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {cards.map((card) => (
          <div
            key={card.id}
            className="w-64 h-80 flex justify-center items-center rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
          >
            <img src={card.image} alt={`Card ${card.id}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardGallery;
