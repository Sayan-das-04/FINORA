import React from "react";

function AccountCharges() {
  return (
    <section
      style={{
        backgroundColor: "#f8fbff",
        padding: "90px 0",
      }}
    >
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">
            Account
            <span style={{ color: "#387ED1" }}> charges</span>
          </h2>

          <p
            className="mt-3"
            style={{
              color: "#777",
              lineHeight: "1.7",
            }}
          >
            Important charges related to maintaining your FINORA account.
          </p>
        </div>

        <div className="row justify-content-center g-4">
          {/* Account Opening */}
          <div className="col-lg-5">
            <div
              className="bg-white h-100 pricing-card"
              style={{
                padding: "30px",
                borderRadius: "15px",
                border: "1px solid #e5eaf0",
              }}
            >
              <div className="d-flex align-items-center mb-4">
                <div
                  className="pricing-icon d-flex align-items-center justify-content-center"
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    backgroundColor: "#eaf3ff",
                    color: "#387ED1",
                    fontSize: "20px",
                    marginRight: "14px",
                  }}
                >
                  <i className="fa-solid fa-user-plus"></i>
                </div>

                <h5 className="fw-bold mb-0">Account Opening</h5>
              </div>

              <div className="d-flex justify-content-between mt-4">
                <span style={{ color: "#666" }}>Individual account</span>

                <strong style={{ color: "#387ED1" }}>Free</strong>
              </div>

              <hr />

              <div className="d-flex justify-content-between">
                <span style={{ color: "#666" }}>Student account</span>

                <strong style={{ color: "#387ED1" }}>Free</strong>
              </div>

              <hr />

              <div className="d-flex justify-content-between">
                <span style={{ color: "#666" }}>Premium account</span>

                <strong style={{ color: "#387ED1" }}>₹499</strong>
              </div>
            </div>
          </div>

          {/* Annual Maintenance */}
          <div className="col-lg-5">
            <div
              className="bg-white h-100 pricing-card"
              style={{
                padding: "30px",
                borderRadius: "15px",
                border: "1px solid #e5eaf0",
              }}
            >
              <div className="d-flex align-items-center mb-4">
                <div
                  className="pricing-icon d-flex align-items-center justify-content-center"
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    backgroundColor: "#eaf3ff",
                    color: "#387ED1",
                    fontSize: "20px",
                    marginRight: "14px",
                  }}
                >
                  <i className="fa-solid fa-wallet"></i>
                </div>

                <h5 className="fw-bold mb-0">Annual Maintenance</h5>
              </div>

              <div className="d-flex justify-content-between mt-4">
                <span style={{ color: "#666" }}>Standard account</span>

                <strong style={{ color: "#387ED1" }}>₹0*</strong>
              </div>

              <hr />

              <div className="d-flex justify-content-between">
                <span style={{ color: "#666" }}>Premium account</span>

                <strong style={{ color: "#387ED1" }}>₹300 / year</strong>
              </div>

              <hr />

              <p
                className="mb-0"
                style={{
                  fontSize: "13px",
                  color: "#999",
                }}
              >
                *Demo pricing for the FINORA project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountCharges;
