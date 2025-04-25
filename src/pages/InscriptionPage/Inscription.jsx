import { useEffect, useState } from "react";
import Logo from "../../assets/picsB.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Inscription({ auth }) {
  const navigate = useNavigate();

  const [newUser, setNewUser] = useState({
    email: "",
    firstname: "",
    username: "",
    lastname: "",
    password: "",
  });

  useEffect(() => {
    if (auth) {
      navigate("/Profile");
    }
  }, [navigate]);

  const setAttribut = (e) => {
    const value = e.target.value;
    setNewUser({ ...newUser, [e.target.name]: value });
  };

  const submitNewUser = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8888/pixios/createUser", newUser)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#1f1c2c] via-[#302b63] to-[#24243e] text-white px-4">
      <div className="w-full max-w-md p-8 rounded-2xl bg-white/10 backdrop-blur-md shadow-xl border border-white/20">
        <div className="flex justify-center mb-6">
          <img src={Logo} alt="Pixios Logo" className="h-20 drop-shadow" />
        </div>

        <h2 className="text-2xl font-bold text-center mb-8">Créer un compte</h2>

        <form onSubmit={submitNewUser} className="space-y-4">
          <input
            type="text"
            name="firstname"
            placeholder="Prénom"
            onChange={setAttribut}
            autoComplete="off"
            className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
          <input
            type="text"
            name="lastname"
            placeholder="Nom"
            onChange={setAttribut}
            autoComplete="off"
            className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
          <input
            type="text"
            name="username"
            placeholder="Nom d'utilisateur"
            onChange={setAttribut}
            autoComplete="off"
            className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Adresse e-mail"
            onChange={setAttribut}
            autoComplete="off"
            className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />

          <input
            type="password"
            name="password"
            placeholder="Mot de passe"
            onChange={setAttribut}
            className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />

          <button
            type="submit"
            className="w-full mt-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 font-semibold transition"
          >
            S'inscrire
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-300">
          Déjà un compte ?{" "}
          <Link to="/Login" className="text-violet-300 hover:underline">
            Connecte-toi ici
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Inscription;
