import React from "react";

function Team() {
  return (
    <div
      className="container"
      style={{
        paddingTop: "80px",
        paddingBottom: "100px",
      }}
    >
      <div className="text-center mb-5">
        <h2 className="fw-bold">Meet the Creator</h2>

        <p className="text-muted mt-3">The person behind FINORA</p>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="row align-items-center">
            {/* Profile */}
            <div className="col-md-5 text-center mb-4 mb-md-0">
              <img
                src="/media/Sayan.png"
                alt="Sayan Das"
                className="img-fluid rounded-circle"
                style={{
                  width: "180px",
                  height: "180px",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* Information */}
            <div className="col-md-7">
              <h3 className="fw-bold">Sayan Das</h3>

              <p className="fw-semibold" style={{ color: "#387ED1" }}>
                Founder & Developer
              </p>

              <p className="text-muted">
                FINORA is a project built with a passion for technology,
                finance, and creating useful digital products.
              </p>

              <p className="text-muted">
                It combines modern web development with a simple and accessible
                approach to financial technology.
              </p>

              {/* Skills */}
              <div className="mt-4">
                <span className="badge rounded-pill text-bg-light me-2 mb-2">
                  React
                </span>

                <span className="badge rounded-pill text-bg-light me-2 mb-2">
                  JavaScript
                </span>

                <span className="badge rounded-pill text-bg-light me-2 mb-2">
                  Node.js
                </span>

                <span className="badge rounded-pill text-bg-light me-2 mb-2">
                  MongoDB
                </span>

                <span className="badge rounded-pill text-bg-light me-2 mb-2">
                  Bootstrap
                </span>

                <span className="badge rounded-pill text-bg-light me-2 mb-2">
                  AWS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
