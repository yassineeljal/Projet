import "./CardsH.css"
import axios from "axios";
import { useState} from 'react'



function CardsH(){

    const [image, setImage] = useState([])
    const [value,setValue] = useState("")
    const API_URL="https://api.unsplash.com/search/photos"

    const changement = (e) => {
    setValue(e.target.value)
    }


    const fetchImage = async () => {
        try {
        const response = await axios.get(`${API_URL}?query=${value}&client_id=${import.meta.env.VITE_API_KEY}`);
        setImage(response.data.results);
        } catch (error) {
        console.error("Error fetching image:", error);
        }
    };

    const handleSearch = (event) => {
    event.preventDefault();
    fetchImage()
    };

      






    return (
        <>
           
     
      
     <div className="grid grid-cols-4 gap-12 " style={{paddingBottom:"30px", cursor:"pointer", paddingLeft:"20px"}}>
  {image.slice(0, 8).map((carte, i) => (
    <div
      key={i}
      className="w-64 h-80 flex justify-center items-center rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
    >
      <img src={carte.urls.full} className="w-full h-full object-cover" />
    </div>
  ))}
</div>
   
          <div className="bar">
              <form className="d-flex" onSubmit={handleSearch}>
                <input className="form-control me-2" type="search" placeholder="Cherchez une image" aria-label="Search" onChange = {(e) => changement(e)}/>
                <button className="btn btn-outline-success" type="submit" style={{cursor:"pointer"}} >Rechercher</button>
              </form>
            </div>
            
        </>
    );
}

export default CardsH;