import Hero from "../../components/Hero/Hero.jsx";
import { useEffect, useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import './Home.css'
import CardsHome from "../../components/Cards/CardsHome.jsx";

function Home({auth}) {

    const navigate = useNavigate();
    const [image, setImage] = useState([])
    const [value,setValue] = useState("")
    const API_URL="https://api.unsplash.com/search/photos"

    const changement = (e) => {
    setValue(e.target.value)
    }


    const fetchImage = async () => {
        try {
            const response = await axios.get(`${API_URL}?query=${value}&client_id=${import.meta.env.VITE_API_KEY}&per_page=9`);
            setImage(response.data.results);
        } catch (error) {
        console.error("Error fetching image:", error);
        }
    };

    const handleSearch = (event) => {
    event.preventDefault();
    fetchImage()
    };


    useEffect(() => {
        if (auth) {
        navigate("/HomeClient");
        }
    }, [navigate])

    return (
        <div className="home">
            <Hero changement = {changement} handleSearch = {handleSearch} />
            <CardsHome image ={image} />

        </div>
    );
}

export default Home;