import React from "react";

function Philosophy() {
  return (
    <div
      className="container"
      style={{
        paddingTop: "90px",
        paddingBottom: "90px",
      }}
    >
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Our Philosophy</h2>

            <p className="text-muted mt-3">
              The principles that guide how we build FINORA.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-6">
              <div className="p-4 h-100 border rounded-4">
                <h4 className="fw-bold">Keep it simple</h4>

                <p className="text-muted mt-3 mb-0">
                  Financial technology doesn't have to be complicated. We focus
                  on creating simple and intuitive experiences that are easy to
                  understand.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="p-4 h-100 border rounded-4">
                <h4 className="fw-bold">Build with technology</h4>

                <p className="text-muted mt-3 mb-0">
                  We use modern technologies to create reliable, accessible, and
                  useful digital experiences.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="p-4 h-100 border rounded-4">
                <h4 className="fw-bold">Put users first</h4>

                <p className="text-muted mt-3 mb-0">
                  Every feature should solve a real problem and make the
                  investing experience more useful for people.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="p-4 h-100 border rounded-4">
                <h4 className="fw-bold">Keep learning</h4>

                <p className="text-muted mt-3 mb-0">
                  Markets and technology are constantly evolving, and FINORA
                  aims to evolve with them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Philosophy;
