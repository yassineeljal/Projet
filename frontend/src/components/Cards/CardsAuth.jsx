import "./CardsAuth.css"
import Album from "../../assets/album.png"
import Like from "../../assets/like.png"
import axios from "axios";




function CardsAuth({image,user}){




  const setImageinLike = async (src, e) => {
    e.preventDefault();
    try{
      console.log(src)
      const response = await axios.post(`http://localhost:8888/pixios/addImageLike/${user.username}/${src}`,);
      if(response.data){
        console.log("Image envoyée")
      }
      else{
        console.log("image a eu un probleme")
      }
    }
    catch (err) {
      console.error("Post fail", err);

  }
  }


  const setImageinAlbum = async (src, e) => {
    e.preventDefault();
    try{
      console.log(src)
      console.log(localStorage.getItem("username"))

      const response = await axios.post(`http://localhost:8888/pixios/addImageAlbum/${localStorage.getItem("username")}/${src}`);
      if(response.data){
        console.log("Image envoyée")
      }
      else{
        console.log("image a eu un probleme")
      }
    }
    catch (err) {
      console.error("Post fail", err);
  }
  }










  
  // Recuperation de la source d'une image: https://stackoverflow.com/questions/77502280/getting-the-src-property-of-image-elements
    return (
        <>
      
     <div className="grid grid-cols-3 gap-12  " style={{paddingBottom:"100px", cursor:"pointer", paddingLeft:"20px"}}>
  {image.map((carte, i) => (
    <div
      key={i}
      
      className="w-64 h-80 flex justify-center items-center rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
      id="card">
      <img src={Album} alt=""  id="album" onClick={(e) => setImageinAlbum(carte.urls.full,e)}/>
      <img src={Like} alt=""  id="like" onClick={(e) => setImageinLike(carte.urls.full,e)}/>

      <img src={carte.urls.full} name="lien" className="w-full h-full object-cover" id="image"/>
      
    </div>
  ))}
</div>
   
          
            
        </>
    );
}

export default CardsAuth;