import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="container hero-section">
      <div className="row text-center">
        {/* Hero Image */}
        <img
          src="media/homehero.png"
          alt="FINORA platform"
          className="mb-5 hero-image"
        />

        {/* Heading */}
        <h1 className="mt-5 hero-title">Invest in everything</h1>

        {/* Description */}
        <p className="hero-description">
          A simple platform to explore markets, manage your portfolio, and make
          smarter investment decisions.
        </p>

        {/* Button */}
        <button
          type="button"
          className="btn fw-bold mb-5 rounded-pill hero-button"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Hero;
