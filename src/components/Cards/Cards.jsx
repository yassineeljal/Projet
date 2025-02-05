import React from 'react';

function Cards(props) {
    return (
        <div>
            
      <div className="flex justify-center items-center min-h-screen">
        <div className="grid grid-cols-1 gap-x-16 gap-y-12 mt-30 ">
          <div className="cards w-40px h-80 flex items-center justify-center">
            <figure className="cardzz"></figure>
          </div>
        </div>
      </div>




      <div className="flex justify-center items-center min-h-screen">
        <div className="grid grid-cols-2 gap-x-16 gap-y-24 mt-30 " style={{ paddingBottom: "70px" }}>
          <div className="cards w-240px h-80 flex items-center justify-center">
            <figure className="card"></figure>
          </div>
          <div className="cards w-240px h-80 flex items-center justify-center">
            <figure className="card"></figure>
          </div>
          <div className="cards w-240px h-80 flex items-center justify-center">
            <figure className="card"></figure>
          </div>
          <div className="cards w-240px h-80 flex items-center justify-center">
            <figure className="card"></figure>
          </div>
        </div>
      </div>
        </div>
    );
}

export default Cards;