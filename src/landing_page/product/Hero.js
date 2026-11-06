import React from "react";

function Hero() {
  return (
    <div
      className="container text-center"
      style={{
        paddingTop: "150px",
        paddingBottom: "80px",
      }}
    >
      <div className="row justify-content-center">
        <div className="col-lg-9">
          <h1
            className="fw-bold"
            style={{
              fontSize: "48px",
              letterSpacing: "-1px",
            }}
          >
            Powerful tools.
            <span style={{ color: "#387ED1" }}> Simple investing.</span>
          </h1>

          <p
            className="mt-4 mx-auto"
            style={{
              maxWidth: "700px",
              fontSize: "19px",
              lineHeight: "1.8",
              color: "#555",
            }}
          >
            Explore FINORA's products designed to help you discover markets,
            understand investments, and manage your financial journey.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
