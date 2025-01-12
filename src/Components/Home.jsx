import { useContext } from "react";
import {ApiContext} from '../ToggleContext/APIContextProvider'
import {ToggleContext} from '../ToggleContext/ToggleContextProvider'

function Home() {
  const { mode } = useContext(ToggleContext);
  const { apiData } = useContext(ApiContext);
  const { movieTitle, handleChange } = useContext(ApiContext);

  
  console.log(apiData);
  if (!apiData) {
    return <div className="text-6xl font-bold text-center mt-11">Loading...</div>;
  }

  return (
    <div className="min-h-screen w-full p-4 flex flex-col item-center justify-start gap-4"
    style={
      mode === "light"
        ? {
            backgroundColor: "#161616",
            color: "white",
          }
        : {
            backgroundColor: "#F9F9F9",
            color: "black",
          }
    }>
      
<div className="w-full text-center">
<input type="text" onChange={handleChange} value={movieTitle} placeholder="Search Movies ..."
      className="w-[264px] text-center outline-none border-2 border-black rounded-full py-1 px-3 bg-gray-500 placeholder:text-white text-white" />

</div>


    <div className="max-w-3xl mx-auto bg-gray-600 shadow-lg rounded-lg p-4"
    style={
      mode === "light"
        ? {
            backgroundColor: "#161616",
            color: "white",
            border: "1px solid #fff",
          }
        : {
            backgroundColor: "#F9F9F9",
            color: "black",
            border: "1px solid #000",
          }
    }>

      <div className="flex flex-col sm:flex-row items-center">
        <img
          src={apiData.Poster}
          alt={apiData.Title}
          className="w-48 h-72 object-cover rounded-lg mb-4 sm:mb-0 sm:mr-6"
        />
        <div>
          <h2 className="text-2xl font-bold mb-2">{apiData.Title}</h2>
          <p className="text-sm mb-2">
            <strong>Released:</strong> {apiData.Released}
          </p>
          <p className="text-sm mb-2">
            <strong>Genre:</strong> {apiData.Genre}
          </p>
          <p className="text-sm mb-2">
            <strong>Director:</strong> {apiData.Director}
          </p>
          <p className="text-sm mb-2">
            <strong>Writer:</strong> {apiData.Writer}
          </p>
          <p className="text-sm mb-2">
            <strong>Actors:</strong> {apiData.Actors}
          </p>
          <p className="text-sm mb-2">
            <strong>IMDB Rating:</strong> {apiData.imdbRating}
          </p>
          <p className="text-sm mb-2">
            <strong>Awards :</strong> {apiData.Awards}
          </p>
          <p className="text-sm mb-2">
            <strong>Type :</strong> {apiData.Type}
          </p>
          <p className="text-sm">
            <strong>Plot:</strong> {apiData.Plot}
          </p>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Home;
