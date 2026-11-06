import React from "react";

function CostTransparency() {
  const points = [
    {
      icon: "fa-eye",
      title: "Clear Cost View",
      description:
        "FINORA presents important cost information in a simple and easy-to-understand format.",
    },
    {
      icon: "fa-calculator",
      title: "Simple Breakdown",
      description:
        "Understand how different components can contribute to the overall transaction cost.",
    },
    {
      icon: "fa-shield-halved",
      title: "Transparent Information",
      description:
        "Pricing information is presented clearly so users can understand the charges before making decisions.",
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
      {/* Heading */}
      <div className="text-center mb-5">
        <h2 className="fw-bold">
          Cost
          <span style={{ color: "#387ED1" }}> transparency</span>
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
          FINORA keeps pricing information simple, clear, and easy to
          understand.
        </p>
      </div>

      {/* Cards */}
      <div className="row g-4">
        {points.map((point, index) => (
          <div className="col-lg-4 col-md-6" key={index}>
            <div
              className="pricing-card h-100"
              style={{
                padding: "30px",
                border: "1px solid #e5eaf0",
                borderRadius: "16px",
                backgroundColor: "#fff",
              }}
            >
              {/* Icon */}
              <div
                className="pricing-icon d-flex align-items-center justify-content-center"
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "14px",
                  backgroundColor: "#eaf3ff",
                  color: "#387ED1",
                  fontSize: "20px",
                  marginBottom: "22px",
                }}
              >
                <i className={`fa-solid ${point.icon}`}></i>
              </div>

              {/* Title */}
              <h5 className="fw-bold">{point.title}</h5>

              {/* Description */}
              <p
                className="mb-0 mt-3"
                style={{
                  color: "#777",
                  lineHeight: "1.7",
                }}
              >
                {point.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CostTransparency;
