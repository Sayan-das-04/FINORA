import React from "react";

function QuickHelp() {
  const helpItems = [
    {
      icon: "fa-user-plus",
      title: "Open an account",
      description: "Learn how to create and activate your FINORA account.",
    },
    {
      icon: "fa-wallet",
      title: "Add money",
      description: "Find out how to add funds securely to your account.",
    },
    {
      icon: "fa-money-bill-transfer",
      title: "Withdraw funds",
      description: "Learn how to transfer available funds to your bank.",
    },
    {
      icon: "fa-lock",
      title: "Reset password",
      description: "Recover access to your FINORA account securely.",
    },
  ];

  return (
    <section
      style={{
        backgroundColor: "#f8fbff",
        padding: "90px 0",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left */}
          <div className="col-lg-4 mb-5 mb-lg-0">
            <span
              style={{
                color: "#387ED1",
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              QUICK HELP
            </span>

            <h2
              className="fw-bold mt-3"
              style={{
                fontSize: "36px",
                letterSpacing: "-1px",
              }}
            >
              Need an answer
              <span style={{ color: "#387ED1" }}> right now?</span>
            </h2>

            <p
              className="mt-3"
              style={{
                color: "#777",
                lineHeight: "1.8",
              }}
            >
              Get quick guidance for some of the most common FINORA questions.
            </p>
          </div>

          {/* Right */}
          <div className="col-lg-8">
            <div className="row g-3">
              {helpItems.map((item, index) => (
                <div className="col-md-6" key={index}>
                  <div
                    className="quick-help-card h-100"
                    style={{
                      backgroundColor: "#fff",
                      border: "1px solid #e5eaf0",
                      borderRadius: "16px",
                      padding: "25px",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                    }}
                  >
                    <div
                      className="d-flex align-items-center justify-content-center"
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "13px",
                        backgroundColor: "#eaf3ff",
                        color: "#387ED1",
                        marginBottom: "18px",
                      }}
                    >
                      <i className={`fa-solid ${item.icon}`}></i>
                    </div>

                    <h6 className="fw-bold">{item.title}</h6>

                    <p
                      className="mb-0 mt-2"
                      style={{
                        color: "#777",
                        fontSize: "14px",
                        lineHeight: "1.6",
                      }}
                    >
                      {item.description}
                    </p>

                    <div
                      className="mt-3"
                      style={{
                        color: "#387ED1",
                        fontSize: "13px",
                        fontWeight: "600",
                      }}
                    >
                      Learn more
                      <i
                        className="fa-solid fa-arrow-right ms-2"
                        style={{ fontSize: "11px" }}
                      ></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuickHelp;
