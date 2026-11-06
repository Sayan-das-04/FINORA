import React from "react";

function QuickPricing() {
  const cards = [
    {
      icon: "fa-chart-line",
      title: "Equity Delivery",
      price: "₹0",
      description: "Zero brokerage on eligible delivery investments.",
    },
    {
      icon: "fa-bolt",
      title: "Intraday",
      price: "₹20",
      description: "Flat ₹20 or 0.03% per executed order, whichever is lower.",
    },
    {
      icon: "fa-coins",
      title: "Direct Mutual Funds",
      price: "₹0",
      description:
        "No platform commission on eligible direct mutual fund investments.",
    },
  ];

  return (
    <section
      style={{
        backgroundColor: "#f8fbff",
        padding: "70px 0",
      }}
    >
      <div className="container">
        <div className="row g-4 justify-content-center">
          {cards.map((card, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div
                className="bg-white h-100 text-center pricing-card"
                style={{
                  padding: "35px 25px",
                  borderRadius: "16px",
                  border: "1px solid #e5eaf0",
                  boxShadow: "0 5px 20px rgba(0,0,0,0.04)",
                }}
              >
                <div
                  className="mx-auto mb-4 d-flex align-items-center justify-content-center pricing-icon"
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    backgroundColor: "#eaf3ff",
                    color: "#387ED1",
                    fontSize: "25px",
                  }}
                >
                  <i className={`fa-solid ${card.icon}`}></i>
                </div>

                <h4 className="fw-bold">{card.title}</h4>

                <h2 className="fw-bold mt-3" style={{ color: "#387ED1" }}>
                  {card.price}
                </h2>

                <p
                  className="mb-0"
                  style={{
                    color: "#777",
                    lineHeight: "1.6",
                  }}
                >
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default QuickPricing;
