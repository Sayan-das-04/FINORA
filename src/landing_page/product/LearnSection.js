import React from "react";

function LearnSection() {
  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "#f8fbff",
        paddingTop: "90px",
        paddingBottom: "100px",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Content */}
          <div className="col-lg-5">
            <h2 className="fw-bold">FINORA Learn</h2>

            <p
              className="text-muted mt-4"
              style={{
                fontSize: "17px",
                lineHeight: "1.8",
              }}
            >
              Build your understanding of investing through simple explanations,
              practical examples, and easy-to-follow financial lessons.
            </p>

            <a
              href="#"
              className="text-decoration-none fw-semibold"
              style={{ color: "#387ED1" }}
            >
              Start learning →
            </a>
          </div>

          {/* Image */}
          <div className="col-lg-7 text-center mt-5 mt-lg-0">
            <img
              src="https://placehold.co/700x430"
              alt="FINORA Learn"
              className="img-fluid"
              style={{
                maxWidth: "650px",
                width: "100%",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LearnSection;
