import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from "../../assets/picsB.png";

function Login({ setAuth, auth, user, setUser }) {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const API_URL = import.meta.env.VITE_API_URL;
  

  useEffect(() => {
    if (auth) {
      navigate("/Profile");
    }
  }, [auth, navigate]);

  const setAttribut = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };

  const submitLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${API_URL}/pixios/login/${user.username}/${user.password}`
      );
      if (response.data) {
        setAuth(true);
        localStorage.setItem("username", user.username);
        localStorage.setItem("auth", "true");
        navigate("/Profile");
        console.log("connexion réussie");
      } else {
        setError(true);
      }
    } catch (err) {
      console.error("Login failed", err);
      setError(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#1f1c2c] via-[#302b63] to-[#24243e] text-white px-4">
      <div className="w-full max-w-md p-8 rounded-2xl bg-white/10 backdrop-blur-md shadow-xl border border-white/20">
        <div className="flex justify-center mb-6">
          <img src={Logo} alt="Pixios Logo" className="h-20 drop-shadow" />
        </div>

        <h2 className="text-2xl font-bold text-center mb-8">
          Connectez-vous à votre compte
        </h2>

        <form onSubmit={submitLogin} className="space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Nom d'utilisateur"
            value={user.username}
            onChange={setAttribut}
            required
            className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Mot de passe"
            value={user.password}
            onChange={setAttribut}
            required
            className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />

          <button
            type="submit"
            className="w-full mt-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 font-semibold transition"
          >
            Se connecter
          </button>
        </form>

        {error && (
          <p className="mt-4 text-center text-red-300">
            Identifiants incorrects
          </p>
        )}

        <p className="mt-6 text-center text-sm text-gray-300">
          Pas encore inscrit ?{" "}
          <Link to="/Inscription" className="text-violet-300 hover:underline">
            Crée ton compte ici
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
