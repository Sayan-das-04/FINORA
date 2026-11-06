import React from "react";

function OtherCharges() {
  const charges = [
    {
      icon: "fa-building-columns",
      title: "DP Charges",
      price: "₹15 + applicable taxes",
      description: "When eligible securities are sold",
    },
    {
      icon: "fa-lock",
      title: "Pledge Charges",
      price: "₹20 + applicable taxes",
      description: "Per pledge request",
    },
    {
      icon: "fa-credit-card",
      title: "Payment Gateway",
      price: "₹5 + applicable taxes",
      description: "For supported payment methods",
    },
    {
      icon: "fa-file-lines",
      title: "Physical Documents",
      price: "₹25 + delivery",
      description: "For physical document requests",
    },
    {
      icon: "fa-code",
      title: "Developer API",
      price: "From ₹499 / month",
      description: "For higher API usage",
    },
    {
      icon: "fa-headset",
      title: "Priority Support",
      price: "₹99 / month",
      description: "Optional premium support",
    },
  ];

  return (
    <section
      className="container"
      style={{
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
    >
      <div className="text-center mb-5">
        <h2 className="fw-bold">
          Other
          <span style={{ color: "#387ED1" }}> charges</span>
        </h2>

        <p
          className="mt-3"
          style={{
            color: "#777",
            maxWidth: "600px",
            margin: "auto",
            lineHeight: "1.7",
          }}
        >
          Some services may have additional charges. Here's a simple overview.
        </p>
      </div>

      <div className="row g-4">
        {charges.map((charge, index) => (
          <div className="col-lg-4 col-md-6" key={index}>
            <div
              className="h-100 pricing-card"
              style={{
                padding: "28px",
                border: "1px solid #e5eaf0",
                borderRadius: "16px",
                backgroundColor: "#fff",
              }}
            >
              {/* Icon */}
              <div
                className="pricing-icon d-flex align-items-center justify-content-center"
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  backgroundColor: "#eaf3ff",
                  color: "#387ED1",
                  fontSize: "19px",
                  marginBottom: "20px",
                }}
              >
                <i className={`fa-solid ${charge.icon}`}></i>
              </div>

              {/* Title */}
              <h6 className="fw-bold mb-0">{charge.title}</h6>

              {/* Price */}
              <h5
                className="fw-bold mt-3 mb-2"
                style={{
                  color: "#387ED1",
                }}
              >
                {charge.price}
              </h5>

              {/* Description */}
              <p
                className="mb-0"
                style={{
                  color: "#777",
                  fontSize: "14px",
                  lineHeight: "1.6",
                }}
              >
                {charge.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OtherCharges;
