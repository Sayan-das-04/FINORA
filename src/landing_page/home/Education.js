import React from "react";

function Education() {
  return (
    <div className="container mt-5 mb-5 p-5">
      <div className="row align-items-center">
        <div className="col-6">
          <img
            src="media/education.svg"
            alt="FINORA Learning Platform"
            style={{ width: "75%" }}
          />
        </div>

        <div className="col-md-6 ps-md-5">
          <h2 className="mb-3 fw-bold">
            Master the markets.
            <br />
            Zero financial risk.
          </h2>

          <p className="text-muted fs-5 mb-4" style={{ lineHeight: "1.6" }}>
            Don't just read about trading—experience it. FINORA bridges the gap
            between theory and execution. Study market fundamentals and complex
            strategies, then immediately test your edge using your virtual
            portfolio.
          </p>

          <a
            href="/learn"
            className="btn fw-bold mb-5 rounded-pill px-4 py-2"
            style={{
              border: "2px solid #387ed1",
              color: "#387ed1",
              transition: "0.3s",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#387ed1";
              e.target.style.color = "white";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "#387ed1";
            }}
          >
            Start Learning <i className="fa-solid fa-arrow-right ms-2"></i>
          </a>

          <h4 className="mb-3 fw-semibold">The Simulator Lounge</h4>

          <p className="text-muted" style={{ lineHeight: "1.6" }}>
            Connect with a network of ambitious traders. Share your simulated
            setups, debate live market trends, and refine your strategies in a
            collaborative, stress-free environment.
          </p>

          <a
            href="/community"
            className="text-decoration-none fw-bold"
            style={{ color: "#387ed1" }}
          >
            Join the Discussion <i className="fa-solid fa-arrow-right ms-1"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
