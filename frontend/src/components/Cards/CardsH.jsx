import "./CardsH.css"
import {useState,useEffect} from "react";
import axios from "axios";
function CardsH() {


    const API_URL="https://api.unsplash.com/search/photos"

    const [image, setImage] = useState([])

  useEffect(() => {
    axios.get(`${API_URL}?query=${searchInput.current.value}&client_id=${import.meta.env.VITE_API_KEY}`)
        .then(response => setImage(response.data))
        .catch(err => console.log(err))
  },[]);


  return (
        <>
          <div className="flex justify-center items-center min-h-screen">
            <div className="grid grid-cols-2 gap-x-16 gap-y-24 mt-30" style={{ paddingBottom: "70px" }}>
                {image.map((carte, i) => (
                <div className="cards w-240px h-80 flex items-center justify-center" key={i}>
                  <figure className="card" >{carte.link.self}</figure>
                </div>
              ))}
            </div>
          </div>
        </>
    );
}

export default CardsH;