import React from "react";

function SupportCTA() {
  return (
    <section
      style={{
        padding: "20px 0 100px",
      }}
    >
      <div className="container">
        <div
          className="text-center"
          style={{
            background: "linear-gradient(135deg, #387ED1 0%, #2f6fba 100%)",
            borderRadius: "24px",
            padding: "65px 30px",
            color: "#fff",
          }}
        >
          <div
            className="d-flex align-items-center justify-content-center mx-auto"
            style={{
              width: "58px",
              height: "58px",
              borderRadius: "16px",
              backgroundColor: "rgba(255,255,255,0.15)",
              fontSize: "22px",
              marginBottom: "22px",
            }}
          >
            <i className="fa-solid fa-headset"></i>
          </div>

          <h2 className="fw-bold">We're here to help.</h2>

          <p
            className="mt-3"
            style={{
              maxWidth: "600px",
              margin: "auto",
              lineHeight: "1.7",
              opacity: "0.9",
            }}
          >
            Couldn't find what you were looking for? Reach out to the FINORA
            support team and we'll help you find the right solution.
          </p>

          <button
            type="button"
            className="btn mt-4"
            style={{
              backgroundColor: "#fff",
              color: "#387ED1",
              borderRadius: "25px",
              padding: "11px 28px",
              fontWeight: "600",
            }}
          >
            Contact FINORA Support
            <i className="fa-solid fa-arrow-right ms-2"></i>
          </button>
        </div>
      </div>
    </section>
  );
}

export default SupportCTA;
