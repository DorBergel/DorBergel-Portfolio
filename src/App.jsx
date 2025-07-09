import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./styles/App.css";
import Hero from "./pages/Hero";

function App() {
  return (
    <>
      <div className="App">
        <Hero />
      </div>
    </>
  );
}

export default App;
