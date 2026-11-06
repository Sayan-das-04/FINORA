import React from "react";

function ChargesExplained() {
  const explanations = [
    {
      icon: "fa-building-columns",
      title: "Transaction Charges",
      description:
        "Charges collected by exchanges for processing transactions across the market.",
    },
    {
      icon: "fa-file-invoice-dollar",
      title: "Government Taxes",
      description:
        "Statutory taxes such as GST, STT and stamp duty may apply to transactions.",
    },
    {
      icon: "fa-shield-halved",
      title: "Regulatory Charges",
      description:
        "Certain regulatory and market-related charges may be applicable to transactions.",
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
        <div className="text-center mb-5">
          <h2 className="fw-bold">
            Charges
            <span style={{ color: "#387ED1" }}> explained</span>
          </h2>

          <p
            className="mt-3"
            style={{
              color: "#777",
              lineHeight: "1.7",
            }}
          >
            Understanding the different components of your trading costs.
          </p>
        </div>

        <div className="row g-4">
          {explanations.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div
                className="bg-white h-100 pricing-card"
                style={{
                  padding: "30px",
                  borderRadius: "16px",
                  border: "1px solid #e5eaf0",
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
                    fontSize: "21px",
                    marginBottom: "22px",
                  }}
                >
                  <i className={`fa-solid ${item.icon}`}></i>
                </div>

                {/* Title */}
                <h5 className="fw-bold mb-3">{item.title}</h5>

                {/* Description */}
                <p
                  className="mb-0"
                  style={{
                    color: "#777",
                    lineHeight: "1.7",
                  }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ChargesExplained;
