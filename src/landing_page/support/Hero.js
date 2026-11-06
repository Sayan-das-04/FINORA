import React, { useState } from "react";

function Hero() {
  const [search, setSearch] = useState("");

  return (
    <section
      style={{
        background:
          "linear-gradient(135deg, #f8fbff 0%, #ffffff 55%, #eef6ff 100%)",
        paddingTop: "150px",
        paddingBottom: "100px",
      }}
    >
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            {/* Badge */}
            <div
              className="d-inline-flex align-items-center gap-2 px-3 py-2 mb-4"
              style={{
                backgroundColor: "#eaf3ff",
                color: "#387ED1",
                borderRadius: "30px",
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              <i className="fa-solid fa-headset"></i>
              FINORA Support Center
            </div>

            {/* Heading */}
            <h1
              className="fw-bold"
              style={{
                fontSize: "52px",
                letterSpacing: "-1.8px",
                lineHeight: "1.15",
              }}
            >
              How can we
              <span style={{ color: "#387ED1" }}> help?</span>
            </h1>

            {/* Description */}
            <p
              className="mt-4"
              style={{
                fontSize: "18px",
                color: "#666",
                lineHeight: "1.7",
                maxWidth: "650px",
                margin: "0 auto",
              }}
            >
              Find quick answers, explore helpful guides, or get assistance with
              your FINORA account and investments.
            </p>

            {/* Search */}
            <div
              className="mx-auto mt-5"
              style={{
                maxWidth: "680px",
                position: "relative",
              }}
            >
              <i
                className="fa-solid fa-magnifying-glass"
                style={{
                  position: "absolute",
                  left: "22px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#387ED1",
                  fontSize: "18px",
                }}
              ></i>

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="form-control"
                placeholder="Search for help..."
                style={{
                  height: "62px",
                  paddingLeft: "55px",
                  paddingRight: "25px",
                  borderRadius: "32px",
                  border: "1px solid #dce6f0",
                  fontSize: "16px",
                  boxShadow: "0 12px 35px rgba(56, 126, 209, 0.10)",
                  outline: "none",
                }}
              />
            </div>

            {/* Popular searches */}
            <div className="mt-4">
              <span
                style={{
                  color: "#999",
                  fontSize: "14px",
                  marginRight: "10px",
                }}
              >
                Popular:
              </span>

              <span
                style={{
                  color: "#387ED1",
                  fontSize: "14px",
                  marginRight: "15px",
                }}
              >
                Open account
              </span>

              <span
                style={{
                  color: "#387ED1",
                  fontSize: "14px",
                  marginRight: "15px",
                }}
              >
                Add money
              </span>

              <span
                style={{
                  color: "#387ED1",
                  fontSize: "14px",
                }}
              >
                Withdraw funds
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
