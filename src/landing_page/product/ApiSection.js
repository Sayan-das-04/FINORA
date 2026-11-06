import React from "react";

function ApiSection() {
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
        <div className="col-lg-6 text-center">
          <img
            src="https://placehold.co/650x400"
            alt="FINORA API"
            className="img-fluid"
            style={{
              maxWidth: "600px",
              width: "100%",
            }}
          />
        </div>

        {/* Content */}
        <div className="col-lg-5 offset-lg-1 mt-5 mt-lg-0">
          <h2 className="fw-bold">FINORA API</h2>

          <p
            className="text-muted mt-4"
            style={{
              fontSize: "17px",
              lineHeight: "1.8",
            }}
          >
            Build financial applications and experiments using
            developer-friendly APIs designed to connect your applications with
            FINORA services.
          </p>

          <a
            href="#"
            className="text-decoration-none fw-semibold"
            style={{ color: "#387ED1" }}
          >
            Explore API →
          </a>

          <p className="text-muted mt-4" style={{ fontSize: "14px" }}>
            Designed for developers, startups, and technology enthusiasts.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ApiSection;
