import React, { useContext, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { ToggleContext } from "../ToggleContext/ToggleContextProvider.jsx";
import { ApiContext } from "../ToggleContext/APIContextProvider.jsx";

function Header() {
  const { handlePage, mode } = useContext(ToggleContext);

  return (
    <div
      className="w-full px-2 py-4 flex justify-between sm:items-center items-start"
      style={
        mode === "light"
          ? {
              backgroundColor: "#161616",
              color: "white",
              borderBottom: "1px solid #fff",
            }
          : {
              backgroundColor: "#F9F9F9",
              color: "black",
              borderBottom: "1px solid #000",
            }
      }
    >
      <div className="bg-clip-text text-2xl text-transparent bg-gradient-to-r from-gray-800 via-gray-600 to-gray-400  font-bold ">
        MovieVerse
      </div>


      <button
        onClick={handlePage}
        style={
          mode === "dark"
            ? { backgroundColor: "#212121", color: "white" }
            : { backgroundColor: "white", color: "black" }
        }
        className="p-2 rounded-full font-semibold text-base shadow-sm"
      >
        {mode === "light" ? "😎 Light" : "🌛 Dark"}{" "}
        Mode
      </button>
    </div>
  );
}

export default Header;
