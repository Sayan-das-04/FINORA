import React, { useState } from "react";

function PricingTabs() {
  const [activeTab, setActiveTab] = useState("equity");

  const tabs = {
    equity: {
      title: "Equity",
      description:
        "Explore the pricing structure for equity investments and trading.",
      items: [
        {
          name: "Delivery",
          price: "₹0 brokerage",
        },
        {
          name: "Intraday",
          price: "₹20 or 0.03%",
        },
        {
          name: "Portfolio tracking",
          price: "Included",
        },
      ],
    },

    mutualFunds: {
      title: "Mutual Funds",
      description:
        "Simple pricing information for eligible mutual fund investments.",
      items: [
        {
          name: "Direct Mutual Funds",
          price: "₹0",
        },
        {
          name: "Portfolio tracking",
          price: "Included",
        },
        {
          name: "Investment insights",
          price: "Included",
        },
      ],
    },

    api: {
      title: "API",
      description:
        "Pricing options for developers building applications with FINORA.",
      items: [
        {
          name: "Basic API",
          price: "Free",
        },
        {
          name: "Developer API",
          price: "From ₹499/month",
        },
        {
          name: "Advanced access",
          price: "Contact FINORA",
        },
      ],
    },
  };

  const currentTab = tabs[activeTab];

  return (
    <section
      style={{
        backgroundColor: "#f8fbff",
        padding: "90px 0",
      }}
    >
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">
            Explore
            <span style={{ color: "#387ED1" }}> pricing</span>
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
            Select a category to understand the different FINORA pricing
            structures.
          </p>
        </div>

        {/* Tabs */}
        <div className="d-flex justify-content-center flex-wrap gap-2 mb-5">
          <button
            type="button"
            onClick={() => setActiveTab("equity")}
            className="btn"
            style={{
              backgroundColor: activeTab === "equity" ? "#387ED1" : "#fff",
              color: activeTab === "equity" ? "#fff" : "#555",
              border: "1px solid #dce5ef",
              borderRadius: "25px",
              padding: "10px 24px",
            }}
          >
            Equity
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("mutualFunds")}
            className="btn"
            style={{
              backgroundColor: activeTab === "mutualFunds" ? "#387ED1" : "#fff",
              color: activeTab === "mutualFunds" ? "#fff" : "#555",
              border: "1px solid #dce5ef",
              borderRadius: "25px",
              padding: "10px 24px",
            }}
          >
            Mutual Funds
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("api")}
            className="btn"
            style={{
              backgroundColor: activeTab === "api" ? "#387ED1" : "#fff",
              color: activeTab === "api" ? "#fff" : "#555",
              border: "1px solid #dce5ef",
              borderRadius: "25px",
              padding: "10px 24px",
            }}
          >
            API
          </button>
        </div>

        {/* Content */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div
              className="pricing-card bg-white"
              style={{
                padding: "35px",
                border: "1px solid #e5eaf0",
                borderRadius: "18px",
              }}
            >
              <h4 className="fw-bold">{currentTab.title}</h4>

              <p
                className="mt-3"
                style={{
                  color: "#777",
                  lineHeight: "1.7",
                }}
              >
                {currentTab.description}
              </p>

              <div className="mt-4">
                {currentTab.items.map((item, index) => (
                  <div
                    key={index}
                    className="d-flex justify-content-between align-items-center py-3"
                    style={{
                      borderBottom:
                        index !== currentTab.items.length - 1
                          ? "1px solid #e5eaf0"
                          : "none",
                    }}
                  >
                    <span style={{ color: "#555" }}>{item.name}</span>

                    <strong style={{ color: "#387ED1" }}>{item.price}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingTabs;
