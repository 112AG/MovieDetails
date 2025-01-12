import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ToggleContextProvider from "./ToggleContext/ToggleContextProvider";
import APIContextProvider from "./ToggleContext/APIContextProvider";

const App = () => {
  return (
    <APIContextProvider>
      <ToggleContextProvider>
      <div className="w-full h-full ">
      <Header />
      <main >
        <Outlet /> 
      </main>
      <Footer />
    </div>
    </ToggleContextProvider>
    </APIContextProvider>
  );
};

export default App;
