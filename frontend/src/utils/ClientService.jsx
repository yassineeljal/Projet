import React, { useEffect, useState } from 'react';

function ClientService() {

    const [auth, setAuth] = useState(false);

    const [userProfile, setUserProfile] = useState({
        username:"",
        firstname:"",
        lastname:""
      });

      const [user, setUser] = useState({
        username:"",
        password:"",
    });

    useEffect(() => { 
        if (localStorage.getItem("auth") === "true") {
          setAuth(true);
        }
      }, [])
    
      useEffect(() => {
        localStorage.setItem("auth", auth);
      }, [auth])


 


    return {
        auth,
        setAuth,
        userProfile,
        setUserProfile,
        user,
        setUser

        
      };
}

export default ClientService;