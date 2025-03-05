
import { useState } from "react";
import Logo from "../../assets/picsN.png"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


function Inscription() {

  const [user, setUser] = useState({
    email:"",
    firstname:"",
    username:"",
    lastname:"",
    password:"",
});




const setAttribut = (e) => {
  const value = e.target.value;
  setUser({...user, [e.target.name]: value})
}

const navigate = useNavigate();

const submitNewUser = (e) =>{
  e.preventDefault();
  axios.post("http://localhost:8888/pixios/createUser", user)
      .then(() =>{
          navigate("/")
      }).catch((error) =>{
      console.log(error);
  });
}


  return (
    <>
      <div className="flex h-230 flex-1 flex-col justify-center px-6 py-12 lg:px-8  bg-white">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
          <Link to={"/"}>
            <img
              alt="Your Company"
              src={Logo}
              className="mx-auto h-50 w-auto"
            />
          </Link>
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            
Inscrivez-vous
          </h2>
        </div>


        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6" onSubmit={(e) => submitNewUser(e)}>


          <div>
              <label htmlFor="firstname" className="block text-sm/6 font-medium text-gray-900">
                
              Prénom
              </label>
              <div className="mt-2">
                <input
                  id="firstname"
                  name="firstname"
                  type="firstname"
                  required
                  autoComplete="firstname"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  onChange={(e) => setAttribut(e)}
                  value={user.firstname}
                />
              </div>
            </div>



          <div>
              <label htmlFor="lastname" className="block text-sm/6 font-medium text-gray-900">
                
Nom
              </label>
              <div className="mt-2">
                <input
                  id="lastname"
                  name="lastname"
                  type="lastname"
                  required
                  autoComplete="lastname"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  onChange={(e) => setAttribut(e)}
                  value={user.lastname}
                />
              </div>
            </div>
            <div>
              <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
                
Nom d'utilisateur
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="username"
                  required
                  autoComplete="username"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  onChange={(e) => setAttribut(e)}
                  value={user.username}
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                
Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  onChange={(e) => setAttribut(e)}
                  value={user.email}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                Mot de passe
                </label>
                <div className="text-sm">

                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  onChange={(e) => setAttribut(e)}
                  value={user.password}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer"
              >
                S'inscrire
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Vous n'êtes pas membre?{' '}
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Se connecter
            </a>
          </p>
        </div>
      </div>
    </>
  )
}


export default Inscription;