import React, { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const ApiContext = createContext();

 
function APIContextProvider({children}) {

  const [apiData, setApiData] = useState(null);
  const [movieTitle, setMovieTitle] = useState("Dhoom");
  const apiKey = "23405d69";

  const getMovieData = async () => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?t=${movieTitle}&apikey=${apiKey}`
      );
      
      const data = response.data;

      if (data.Response === "True") {
        setApiData(data);
      } else {
        console.error("OMDb API Error:", data.Error);
      }
    } catch (error) {
      console.error("Axios Error:", error);
    }
  };

  function handleChange (e) {
    setMovieTitle(e.target.value)
  }      


  useEffect(() => {
    getMovieData();
  }, [movieTitle]);
  
  const value = {
    apiData,
    setApiData,
    movieTitle,
    setMovieTitle,
    handleChange,
  }

  return <div>
    <ApiContext.Provider value={value}>
      {children}
    </ApiContext.Provider>
  </div>;
}

export default APIContextProvider;
