import React from "react";

function InvestSection() {
  return (
    <div
      className="container"
      style={{
        paddingTop: "90px",
        paddingBottom: "100px",
      }}
    >
      <div className="row align-items-center">
        {/* Image */}
        <div className="col-lg-7 text-center">
          <img
            src="https://placehold.co/700x430"
            alt="FINORA Invest"
            className="img-fluid"
            style={{
              maxWidth: "650px",
              width: "100%",
            }}
          />
        </div>

        {/* Content */}
        <div className="col-lg-5 mt-5 mt-lg-0">
          <h2 className="fw-bold">FINORA Invest</h2>

          <p
            className="text-muted mt-4"
            style={{
              fontSize: "17px",
              lineHeight: "1.8",
            }}
          >
            Explore different investment opportunities and manage your financial
            journey through a simple, organized experience.
          </p>

          <a
            href="#"
            className="text-decoration-none fw-semibold"
            style={{ color: "#387ED1" }}
          >
            Explore investing →
          </a>
        </div>
      </div>
    </div>
  );
}

export default InvestSection;
