import React from "react";

function LeftSection() {
  return (
    <div
      className="container"
      style={{
        paddingTop: "70px",
        paddingBottom: "100px",
      }}
    >
      <div className="row align-items-center">
        {/* Text */}
        <div className="col-lg-5">
          <h2 className="fw-bold">FINORA Trade</h2>

          <p
            className="text-muted mt-4"
            style={{
              lineHeight: "1.8",
              fontSize: "17px",
            }}
          >
            Explore markets, track prices, and discover investment opportunities
            through a simple and intuitive trading experience.
          </p>

          <a
            href="#"
            className="text-decoration-none fw-semibold"
            style={{
              color: "#387ED1",
            }}
          >
            Learn more →
          </a>
        </div>

        {/* Demo Image */}
        <div className="col-lg-7 text-center mt-5 mt-lg-0">
          <img
            src="https://placehold.co/700x450"
            alt="FINORA Trade platform"
            className="img-fluid"
            style={{
              maxWidth: "650px",
              width: "100%",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
