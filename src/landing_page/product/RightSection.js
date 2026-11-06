import React from "react";

function RightSection() {
  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "#f5faff",
        paddingTop: "90px",
        paddingBottom: "100px",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Demo Image */}
          <div className="col-lg-7 text-center">
            <img
              src="https://placehold.co/700x450"
              alt="FINORA Portfolio"
              className="img-fluid"
              style={{
                maxWidth: "650px",
                width: "100%",
              }}
            />
          </div>

          {/* Text */}
          <div className="col-lg-5 mt-5 mt-lg-0">
            <h2 className="fw-bold">FINORA Portfolio</h2>

            <p
              className="text-muted mt-4"
              style={{
                lineHeight: "1.8",
                fontSize: "17px",
              }}
            >
              Keep track of your investments and get a clear view of your
              portfolio from one place. FINORA helps organize your financial
              information in a simple and intuitive way.
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
      </div>
    </div>
  );
}

export default RightSection;
