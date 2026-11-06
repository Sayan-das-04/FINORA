import React from "react";

function PlanComparison() {
  const features = [
    {
      name: "Portfolio tracking",
      beginner: true,
      investor: true,
      developer: true,
    },
    {
      name: "Advanced analytics",
      beginner: false,
      investor: true,
      developer: true,
    },
    {
      name: "FINORA API",
      beginner: false,
      investor: false,
      developer: true,
    },
    {
      name: "FINORA Learn",
      beginner: true,
      investor: true,
      developer: true,
    },
    {
      name: "Priority support",
      beginner: false,
      investor: true,
      developer: true,
    },
  ];

  const renderFeature = (feature, plan) => {
    const available = feature[plan];

    return (
      <div
        className="d-flex justify-content-between align-items-center py-3"
        style={{
          borderBottom: "1px solid #e5eaf0",
        }}
      >
        <span style={{ color: "#555", fontSize: "14px" }}>{feature.name}</span>

        {available ? (
          <span
            className="d-flex align-items-center justify-content-center"
            style={{
              width: "25px",
              height: "25px",
              borderRadius: "50%",
              backgroundColor: "#eaf3ff",
              color: "#387ED1",
              fontSize: "12px",
            }}
          >
            <i className="fa-solid fa-check"></i>
          </span>
        ) : (
          <span style={{ color: "#bbb" }}>
            <i className="fa-solid fa-minus"></i>
          </span>
        )}
      </div>
    );
  };

  return (
    <section
      className="container"
      style={{
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
    >
      {/* Heading */}
      <div className="text-center mb-5">
        <h2 className="fw-bold">
          Choose your <span style={{ color: "#387ED1" }}>FINORA plan</span>
        </h2>

        <p
          className="mt-3"
          style={{
            color: "#777",
            maxWidth: "650px",
            margin: "auto",
            lineHeight: "1.7",
          }}
        >
          Whether you're just getting started or building with FINORA, explore
          the features available for different journeys.
        </p>
      </div>

      <div className="row g-4 align-items-stretch">
        {/* Beginner */}
        <div className="col-lg-4">
          <div
            className="h-100 pricing-card"
            style={{
              border: "1px solid #e5eaf0",
              borderRadius: "18px",
              padding: "30px",
              backgroundColor: "#fff",
            }}
          >
            <div className="text-center">
              <div
                className="pricing-icon d-flex align-items-center justify-content-center mx-auto"
                style={{
                  width: "58px",
                  height: "58px",
                  borderRadius: "16px",
                  backgroundColor: "#f1f7ff",
                  color: "#387ED1",
                  fontSize: "22px",
                }}
              >
                <i className="fa-solid fa-seedling"></i>
              </div>

              <h4 className="fw-bold mt-3 mb-2">Beginner</h4>

              <p
                className="mb-0"
                style={{
                  color: "#777",
                  fontSize: "14px",
                }}
              >
                Start your investment journey.
              </p>
            </div>

            <div className="mt-4">
              {features.map((feature, index) => (
                <React.Fragment key={index}>
                  {renderFeature(feature, "beginner")}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Active Investor */}
        <div className="col-lg-4">
          <div
            className="h-100 pricing-card"
            style={{
              border: "2px solid #387ED1",
              borderRadius: "18px",
              padding: "30px",
              backgroundColor: "#f8fbff",
              position: "relative",
              boxShadow: "0 12px 35px rgba(56, 126, 209, 0.12)",
            }}
          >
            {/* Popular Badge */}
            <div
              style={{
                position: "absolute",
                top: "-14px",
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "#387ED1",
                color: "#fff",
                padding: "6px 18px",
                borderRadius: "20px",
                fontSize: "11px",
                fontWeight: "700",
                letterSpacing: "0.5px",
              }}
            >
              POPULAR
            </div>

            <div className="text-center">
              <div
                className="pricing-icon d-flex align-items-center justify-content-center mx-auto"
                style={{
                  width: "58px",
                  height: "58px",
                  borderRadius: "16px",
                  backgroundColor: "#e5f1ff",
                  color: "#387ED1",
                  fontSize: "22px",
                }}
              >
                <i className="fa-solid fa-chart-line"></i>
              </div>

              <h4 className="fw-bold mt-3 mb-2">Active Investor</h4>

              <p
                className="mb-0"
                style={{
                  color: "#777",
                  fontSize: "14px",
                }}
              >
                More tools for active investing.
              </p>
            </div>

            <div className="mt-4">
              {features.map((feature, index) => (
                <React.Fragment key={index}>
                  {renderFeature(feature, "investor")}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Developer */}
        <div className="col-lg-4">
          <div
            className="h-100 pricing-card"
            style={{
              border: "1px solid #e5eaf0",
              borderRadius: "18px",
              padding: "30px",
              backgroundColor: "#fff",
            }}
          >
            <div className="text-center">
              <div
                className="pricing-icon d-flex align-items-center justify-content-center mx-auto"
                style={{
                  width: "58px",
                  height: "58px",
                  borderRadius: "16px",
                  backgroundColor: "#f1f7ff",
                  color: "#387ED1",
                  fontSize: "22px",
                }}
              >
                <i className="fa-solid fa-code"></i>
              </div>

              <h4 className="fw-bold mt-3 mb-2">Developer</h4>

              <p
                className="mb-0"
                style={{
                  color: "#777",
                  fontSize: "14px",
                }}
              >
                Build and integrate with FINORA.
              </p>
            </div>

            <div className="mt-4">
              {features.map((feature, index) => (
                <React.Fragment key={index}>
                  {renderFeature(feature, "developer")}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlanComparison;
