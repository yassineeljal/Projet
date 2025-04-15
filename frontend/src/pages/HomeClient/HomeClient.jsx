import Hero from "../../components/Hero/Hero.jsx";
import { useEffect, useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import '../HomePage/Home.css'
import CardsAuth from "../../components/Cards/CardsAuth";

function HomeClient({auth, user}) {

    const navigate = useNavigate();
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
        console.log(response.data.results)
        } catch (error) {
        console.error("Error fetching image:", error);
        }
    };

    const handleSearch = (event) => {
    event.preventDefault();
    fetchImage()
    };


    useEffect(() => {
        if (!auth) {
        navigate("/");
        }
    }, [navigate])

    return (
        <div className="home">
            <Hero changement = {changement} handleSearch = {handleSearch} />
            <CardsAuth image ={image} user = {user} />

        </div>
    );
}

export default HomeClient;