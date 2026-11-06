import React from "react";

function Mission() {
  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "#f5faff",
        paddingTop: "90px",
        paddingBottom: "90px",
      }}
    >
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-9">
            <h2 className="fw-bold mb-4">Our Mission</h2>

            <p
              className="fw-semibold"
              style={{
                color: "#387ED1",
                fontSize: "25px",
                lineHeight: "1.5",
              }}
            >
              Making investing easier to understand and easier to access.
            </p>

            <p
              className="text-muted mt-4"
              style={{
                fontSize: "17px",
                lineHeight: "1.8",
              }}
            >
              We believe technology can make financial markets simpler and more
              accessible for everyone. FINORA combines thoughtful design, modern
              technology, and useful financial tools to create a better
              investing experience.
            </p>

            <p
              className="text-muted"
              style={{
                lineHeight: "1.8",
              }}
            >
              Our mission is to continuously improve the way people discover,
              understand, and manage their investments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mission;
