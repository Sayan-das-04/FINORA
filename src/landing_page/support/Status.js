import React from "react";

function Status() {
  const systems = [
    {
      icon: "fa-globe",
      name: "FINORA Platform",
      status: "Operational",
    },
    {
      icon: "fa-chart-line",
      name: "Trading Services",
      status: "Operational",
    },
    {
      icon: "fa-wallet",
      name: "Payments",
      status: "Operational",
    },
    {
      icon: "fa-code",
      name: "Developer API",
      status: "Operational",
    },
  ];

  return (
    <section
      className="container"
      style={{
        paddingTop: "90px",
        paddingBottom: "90px",
      }}
    >
      <div
        style={{
          backgroundColor: "#f8fbff",
          border: "1px solid #e5eaf0",
          borderRadius: "22px",
          padding: "40px",
        }}
      >
        <div className="row align-items-center">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                width: "55px",
                height: "55px",
                borderRadius: "15px",
                backgroundColor: "#eaf8ef",
                color: "#20a05a",
                fontSize: "21px",
                marginBottom: "20px",
              }}
            >
              <i className="fa-solid fa-circle-check"></i>
            </div>

            <h3 className="fw-bold">System status</h3>

            <p
              style={{
                color: "#777",
                lineHeight: "1.7",
              }}
            >
              Check the current status of FINORA services and platforms.
            </p>
          </div>

          <div className="col-lg-8">
            <div className="row g-3">
              {systems.map((system, index) => (
                <div className="col-md-6" key={index}>
                  <div
                    className="d-flex align-items-center justify-content-between"
                    style={{
                      backgroundColor: "#fff",
                      padding: "16px 18px",
                      borderRadius: "12px",
                      border: "1px solid #e5eaf0",
                    }}
                  >
                    <div className="d-flex align-items-center gap-3">
                      <i
                        className={`fa-solid ${system.icon}`}
                        style={{
                          color: "#387ED1",
                        }}
                      ></i>

                      <span
                        style={{
                          fontSize: "14px",
                          fontWeight: "600",
                        }}
                      >
                        {system.name}
                      </span>
                    </div>

                    <span
                      style={{
                        color: "#20a05a",
                        fontSize: "12px",
                        fontWeight: "600",
                      }}
                    >
                      ● {system.status}
                    </span>
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

export default Status;
