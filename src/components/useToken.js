import { useState } from 'react';

const useToken = () => {

  const getToken = () => {
    return localStorage.getItem('token');
  }

  const [token, setToken] = useState(getToken());


  const saveToken = userToken => {
    console.log("Usetoken", token);
    localStorage.setItem('token', userToken);
    setToken(userToken);
  };

  return {
    setToken: saveToken,
    token
  }
}

export default useToken;