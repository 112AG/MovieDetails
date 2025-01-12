import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./Components/Home";
import About from "./Components/About";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
