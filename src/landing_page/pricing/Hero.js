import React from "react";

function Hero() {
  return (
    <section
      className="container text-center"
      style={{
        paddingTop: "150px",
        paddingBottom: "70px",
      }}
    >
      <h1
        className="fw-bold"
        style={{
          fontSize: "48px",
          letterSpacing: "-1.5px",
        }}
      >
        Simple pricing.
        <span style={{ color: "#387ED1" }}> Clear charges.</span>
      </h1>

      <p
        className="mx-auto mt-4"
        style={{
          maxWidth: "680px",
          fontSize: "19px",
          color: "#666",
          lineHeight: "1.7",
        }}
      >
        Understand exactly what you pay when using FINORA. No complicated
        pricing structure — just transparent information about brokerage and
        other charges.
      </p>
    </section>
  );
}

export default Hero;
