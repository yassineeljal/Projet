import React, { useEffect, useState } from 'react';

function ClientService() {

  const [auth, setAuth] = useState(false);
  const [authReady, setAuthReady] = useState(false); 

  const [userProfile, setUserProfile] = useState({
    username: "",
    firstname: "",
    lastname: ""
  });

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    const localAuth = localStorage.getItem("auth");
    if (localAuth === "true") {
      setAuth(true);
    }
    setAuthReady(true); 
  }, []);

  useEffect(() => {
    localStorage.setItem("auth", auth);
  }, [auth]);

  return {
    auth,
    setAuth,
    authReady, 
    userProfile,
    setUserProfile,
    user,
    setUser
  };
}

export default ClientService;
