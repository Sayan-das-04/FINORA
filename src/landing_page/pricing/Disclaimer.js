import React from "react";

function Disclaimer() {
  return (
    <section
      className="container text-center"
      style={{
        paddingTop: "70px",
        paddingBottom: "80px",
      }}
    >
      <h6 className="fw-bold">FINORA Pricing Disclaimer</h6>

      <p
        className="mx-auto mt-3"
        style={{
          maxWidth: "800px",
          fontSize: "13px",
          color: "#999",
          lineHeight: "1.7",
        }}
      >
        The pricing and charges displayed on this page are demonstration values
        created for the FINORA project. They do not represent actual brokerage,
        exchange, regulatory, tax, or financial-service charges. Actual charges
        would depend on applicable regulations, products, transactions, and
        service agreements.
      </p>
    </section>
  );
}

export default Disclaimer;
