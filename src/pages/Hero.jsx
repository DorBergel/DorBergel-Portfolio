import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="image_container">
        <img src="/public/images/hero.png" alt="Hero" className="hero_image" />
      </div>
    </section>
  );
};

export default Hero;
