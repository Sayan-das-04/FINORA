import React from "react";

function Hero() {
  return (
    <div
      className="container"
      style={{
        paddingTop: "140px",
        paddingBottom: "70px",
      }}
    >
      <div className="row justify-content-center">
        <div className="col-lg-9 text-center">
          <h1
            className="fw-bold"
            style={{
              fontSize: "46px",
              letterSpacing: "-1px",
            }}
          >
            About <span style={{ color: "#387ED1" }}>FINORA</span>
          </h1>

          <p
            className="mt-4 mb-0"
            style={{
              fontSize: "20px",
              lineHeight: "1.7",
              color: "#555",
            }}
          >
            We believe investing should be simple, accessible, and powered by
            technology.
          </p>

          <p
            className="mt-3 mx-auto"
            style={{
              maxWidth: "700px",
              lineHeight: "1.8",
              color: "#777",
            }}
          >
            FINORA was built with a simple idea — investing shouldn't feel
            complicated. We are creating a modern platform that brings financial
            information, investment tools, and portfolio management together in
            one simple experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
