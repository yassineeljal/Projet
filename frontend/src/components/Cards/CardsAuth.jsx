import "./CardsAuth.css"
import Album from "../../assets/album.png"
import Like from "../../assets/like.png"
import { useState } from "react"




function CardsAuth({image}){

  const [picture,setPicture] = useState("")


  const AddAlbum = (e) =>{
    e.preventDefault();
    setPicture(carte.urls.full)
    console.log(carte.urls.full)
    axios.post("http://localhost:8888/pixios/createUser", picture)
    
        .then(() =>{
            navigate("/")
        }).catch((error) =>{
        console.log(error);
    });
  }

  const setAttribut = (e) => {
    const value = e.target.value;
    setPicture({...picture, [e.target.name]: value})
  }
  

    return (
        <>
      
     <div className="grid grid-cols-3 gap-12  " style={{paddingBottom:"100px", cursor:"pointer", paddingLeft:"20px"}}>
  {image.slice(0, 8).map((carte, i) => (
    <div
      key={i}
      className="w-64 h-80 flex justify-center items-center rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
      id="card">
      <img src={Album} alt=""  id="album" onClick={AddAlbum} />
      <img src={Like} alt=""  id="like"/>

      <img src={carte.urls.full} name="lien" className="w-full h-full object-cover" id="image"  onChange={(e) => setAttribut(e)} value={picture} />
      
    </div>
  ))}
</div>
   
          
            
        </>
    );
}

export default CardsAuth;