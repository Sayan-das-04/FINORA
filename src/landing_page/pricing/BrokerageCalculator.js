import React, { useState } from "react";

function BrokerageCalculator() {
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("intraday");

  const calculateBrokerage = () => {
    const value = Number(amount);

    if (!value || value <= 0) {
      return 0;
    }

    if (type === "delivery") {
      return 0;
    }

    return Math.min(20, value * 0.0003);
  };

  const brokerage = calculateBrokerage();

  return (
    <section
      className="container"
      style={{
        paddingTop: "90px",
        paddingBottom: "90px",
      }}
    >
      <div className="text-center mb-5">
        <h2 className="fw-bold">
          Brokerage
          <span style={{ color: "#387ED1" }}> calculator</span>
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
          Estimate your brokerage cost based on the trade value.
        </p>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-7">
          <div
            className="pricing-card"
            style={{
              padding: "35px",
              border: "1px solid #e5eaf0",
              borderRadius: "18px",
              backgroundColor: "#fff",
            }}
          >
            <div className="mb-4">
              <label className="fw-semibold mb-2">Trade Value</label>

              <input
                type="number"
                className="form-control"
                placeholder="Enter trade value"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                style={{
                  padding: "12px",
                  borderRadius: "10px",
                }}
              />
            </div>

            <div className="mb-4">
              <label className="fw-semibold mb-2">Segment</label>

              <select
                className="form-select"
                value={type}
                onChange={(e) => setType(e.target.value)}
                style={{
                  padding: "12px",
                  borderRadius: "10px",
                }}
              >
                <option value="intraday">Equity Intraday</option>
                <option value="delivery">Equity Delivery</option>
              </select>
            </div>

            <div
              className="text-center"
              style={{
                backgroundColor: "#f8fbff",
                padding: "25px",
                borderRadius: "14px",
              }}
            >
              <p
                className="mb-2"
                style={{
                  color: "#777",
                }}
              >
                Estimated Brokerage
              </p>

              <h2
                className="fw-bold mb-0"
                style={{
                  color: "#387ED1",
                }}
              >
                ₹{brokerage.toFixed(2)}
              </h2>
            </div>

            <p
              className="mt-3 mb-0 text-center"
              style={{
                fontSize: "12px",
                color: "#999",
              }}
            >
              Demonstration calculator for the FINORA project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrokerageCalculator;
