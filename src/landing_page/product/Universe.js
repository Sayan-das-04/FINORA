import React from "react";

function Universe() {
  return (
    <div
      className="container"
      style={{
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
    >
      {/* Heading */}
      <div className="text-center mb-5">
        <h2 className="fw-bold">The FINORA Universe</h2>

        <p
          className="text-muted mt-3 mx-auto"
          style={{
            maxWidth: "650px",
            lineHeight: "1.8",
          }}
        >
          Explore a growing ecosystem of tools designed to make your investing
          journey simpler and more accessible.
        </p>
      </div>

      {/* Cards */}
      <div className="row g-4">
        {/* Insights */}
        <div className="col-md-4">
          <div className="border rounded-4 p-4 h-100 text-center">
            <i
              className="fa-solid fa-chart-line"
              style={{
                fontSize: "45px",
                color: "#387ED1",
              }}
            ></i>

            <h4 className="fw-bold mt-4">FINORA Insights</h4>

            <p className="text-muted mt-3">
              Explore market information and discover useful insights in one
              place.
            </p>

            <a
              href="#"
              className="text-decoration-none fw-semibold"
              style={{
                color: "#387ED1",
              }}
            >
              Explore →
            </a>
          </div>
        </div>

        {/* Learn */}
        <div className="col-md-4">
          <div className="border rounded-4 p-4 h-100 text-center">
            <i
              className="fa-solid fa-book-open"
              style={{
                fontSize: "45px",
                color: "#387ED1",
              }}
            ></i>

            <h4 className="fw-bold mt-4">FINORA Learn</h4>

            <p className="text-muted mt-3">
              Learn financial concepts and build your understanding of
              investing.
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
        </div>

        {/* API */}
        <div className="col-md-4">
          <div className="border rounded-4 p-4 h-100 text-center">
            <i
              className="fa-solid fa-code"
              style={{
                fontSize: "45px",
                color: "#387ED1",
              }}
            ></i>

            <h4 className="fw-bold mt-4">FINORA API</h4>

            <p className="text-muted mt-3">
              Build and experiment with financial applications using FINORA
              technology.
            </p>

            <a
              href="#"
              className="text-decoration-none fw-semibold"
              style={{
                color: "#387ED1",
              }}
            >
              Explore →
            </a>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-5 pt-4">
        <h3 className="fw-bold">Start exploring FINORA</h3>

        <p className="text-muted mt-3">
          Discover a simpler way to explore investing.
        </p>

        <a
          href="/signup"
          className="btn rounded-pill px-4 py-2 mt-2 fw-semibold"
          style={{
            backgroundColor: "#387ED1",
            color: "white",
          }}
        >
          Sign up for free
        </a>
      </div>
    </div>
  );
}

export default Universe;
