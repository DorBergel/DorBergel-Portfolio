import { useState } from "react";
import reactLogo from "../public/icons/react.svg";
import viteLogo from "/vite.svg";
import "./styles/App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"; // Assuming you have a Navbar component

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
