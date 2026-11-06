import React from "react";

function OpenAccount() {
  return (
    <div className="container text-center p-2">
      <h1 className="mt-5">Start your investment journey</h1>

      <p>
        Create your Finora account and get access to simple tools for investing,
        trading, and managing your portfolio.
      </p>

      <button
        type="button"
        className="btn fw-bold mb-5 rounded-pill"
        style={{
          width: "20%",
          margin: "auto",
          border: "2px solid #387ED1",
          color: "#387ED1",
          transition: "0.3s",
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = "#387ED1";
          e.target.style.color = "white";
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = "transparent";
          e.target.style.color = "#387ED1";
        }}
      >
        Open Your Account
      </button>
    </div>
  );
}

export default OpenAccount;
