import Hero from "../../components/Hero/Hero.jsx";
import CardsH from "../../components/Cards/CardsH.jsx";
import "./Home.css"
import { useState } from "react";
import axios from "axios"

function Home() {

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
        <div className="home">
            <Hero changement = {changement} handleSearch = {handleSearch} />
            <CardsH image ={image} />

        </div>
    );
}

export default Home;