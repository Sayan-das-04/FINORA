import React from "react";

function Brokerage() {
  const brokerageData = [
    {
      type: "Equity Delivery",
      brokerage: "₹0",
      stt: "0.1% on buy & sell",
      transaction: "Exchange charges applicable",
    },
    {
      type: "Equity Intraday",
      brokerage: "₹20 or 0.03%",
      stt: "0.025% on sell side",
      transaction: "Exchange charges applicable",
    },
    {
      type: "F&O Futures",
      brokerage: "₹20 or 0.03%",
      stt: "Applicable as per regulations",
      transaction: "Exchange charges applicable",
    },
    {
      type: "F&O Options",
      brokerage: "₹20",
      stt: "Applicable as per regulations",
      transaction: "Exchange charges applicable",
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
        <h2 className="fw-bold" style={{ fontSize: "36px" }}>
          Brokerage
          <span style={{ color: "#387ED1" }}> charges</span>
        </h2>

        <p
          className="mx-auto mt-3"
          style={{
            maxWidth: "650px",
            color: "#777",
            lineHeight: "1.7",
          }}
        >
          A quick overview of the brokerage structure used across different
          investment categories.
        </p>
      </div>

      {/* Table Container */}
      <div
        style={{
          border: "1px solid #e5eaf0",
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 8px 30px rgba(0, 0, 0, 0.04)",
        }}
      >
        <div className="table-responsive">
          <table
            className="table align-middle mb-0 pricing-table"
            style={{
              minWidth: "800px",
            }}
          >
            <thead
              style={{
                backgroundColor: "#f8fbff",
                borderBottom: "2px solid #e5eaf0",
              }}
            >
              <tr>
                <th
                  className="p-4"
                  style={{
                    color: "#333",
                    fontWeight: "600",
                  }}
                >
                  Segment
                </th>

                <th
                  className="p-4"
                  style={{
                    color: "#333",
                    fontWeight: "600",
                  }}
                >
                  Brokerage
                </th>

                <th
                  className="p-4"
                  style={{
                    color: "#333",
                    fontWeight: "600",
                  }}
                >
                  STT / CTT
                </th>

                <th
                  className="p-4"
                  style={{
                    color: "#333",
                    fontWeight: "600",
                  }}
                >
                  Transaction Charges
                </th>
              </tr>
            </thead>

            <tbody>
              {brokerageData.map((item, index) => (
                <tr key={index}>
                  <td className="p-4 fw-semibold">{item.type}</td>

                  <td
                    className="p-4 fw-semibold"
                    style={{
                      color: "#387ED1",
                    }}
                  >
                    {item.brokerage}
                  </td>

                  <td
                    className="p-4"
                    style={{
                      color: "#666",
                    }}
                  >
                    {item.stt}
                  </td>

                  <td
                    className="p-4"
                    style={{
                      color: "#666",
                    }}
                  >
                    {item.transaction}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <p
        className="text-center mt-4"
        style={{
          color: "#999",
          fontSize: "13px",
        }}
      >
        Statutory taxes and regulatory charges may apply as required by
        applicable regulations.
      </p>
    </section>
  );
}

export default Brokerage;
