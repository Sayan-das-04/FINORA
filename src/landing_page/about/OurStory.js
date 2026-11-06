import React from "react";

function OurStory() {
  return (
    <div
      className="container"
      style={{
        paddingTop: "80px",
        paddingBottom: "90px",
      }}
    >
      <div className="row align-items-center">
        {/* Left - Story */}
        <div className="col-lg-7">
          <h2 className="fw-bold mb-4">
            We believe investing should be
            <span style={{ color: "#387ED1" }}> simple.</span>
          </h2>

          <p className="text-muted" style={{ lineHeight: "1.8" }}>
            FINORA was created with a simple idea — investing shouldn't feel
            complicated. We wanted to build a platform where people could
            explore financial markets and understand investment opportunities
            without feeling overwhelmed.
          </p>

          <p className="text-muted" style={{ lineHeight: "1.8" }}>
            Our goal is to bring useful financial information, portfolio
            management, and modern investment tools together in one clean and
            intuitive experience.
          </p>

          <p className="text-muted" style={{ lineHeight: "1.8" }}>
            FINORA is continuously evolving as we explore new ideas,
            technologies, and better ways to make the investing experience more
            accessible.
          </p>
        </div>

        {/* Right - Visual */}
        <div className="col-lg-5 mt-5 mt-lg-0 text-center">
          <div
            className="p-5 rounded-4"
            style={{
              backgroundColor: "#f5faff",
            }}
          >
            <i
              className="fa-solid fa-chart-line"
              style={{
                fontSize: "75px",
                color: "#387ED1",
              }}
            ></i>

            <h4 className="fw-bold mt-4">Simple. Modern. Accessible.</h4>

            <p className="text-muted mb-0">
              Technology designed around the investor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurStory;
