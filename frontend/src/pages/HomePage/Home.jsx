import Hero from "../../components/Hero/Hero.jsx";
import CardsH from "../../components/Cards/CardsH.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import "./Home.css"

function Home() {
    return (
        <div className="home">
            <Hero/>
            <CardsH/>

        </div>
    );
}

export default Home;