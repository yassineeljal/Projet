import React from 'react';
import Takfa from '../../assets/Takfa.jpeg';
import Yassine from '../../assets/Yassine.jpeg';
import "./AboutPixiosComponent.css"

const AboutPixiosComponent = () => {
  return (
    <div className="font-sans m-0" style={{backgroundColor:"black", paddingBottom:"200px"}}>
      <div className="p-12 text-center bg-gray-800 text-white" style={{padding:"10px"}}>
        <h1 className="text-3xl font-bold">Pourquoi Pixios? </h1>
        <p className="text-1xl ">Cherchez. Choisissez. Ajoutez.</p>
        <h1 className="text-1xl ">Voilà les 3 choses que vous avez besoin de faire avec Pixios pour pouvoir bénificier d'un album propre à vous et à vos gouts.  </h1>
      </div>

      <h2 className="text-center text-2xl mt-8 font-semibold">À propos de nous</h2>
      <div className="flex flex-wrap justify-center mt-6">

        <div className="sm:w-1/2 lg:w-1/3 p-4">
          <div className="shadow-lg rounded-lg overflow-hidden bg-white text-center">
            <div className="flex justify-center mt-6">
              <img
                src={Takfa}
                alt="Takfa"
                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                id='avatar'
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold">Takfarinas Djerroud</h2>
              <p className="text-gray-500">Étudiant</p>
              <p className="mt-2">Développeur</p>
              <p className="text-blue-600">djerroudtakfarinas7@gmail.com</p>
              <button className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-700">Contact</button>
            </div>
          </div>
        </div>

        <div className="sm:w-1/2 lg:w-1/3 p-4">
          <div className="shadow-lg rounded-lg overflow-hidden bg-white text-center">
            <div className="flex justify-center mt-6 ">
              <img
                src={Yassine}
                alt="Yassine"
                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                id='avatar'

              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold">Yassine El Jal</h2>
              <p className="text-gray-500">Étudiant</p>
              <p className="mt-2">Développeur</p>
              <p className="text-blue-600">yassineeeljal0@gmail.com</p>
              <button className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-700">Contact</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPixiosComponent;