import React from "react";

function ContactSupport() {
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
        <span
          style={{
            color: "#387ED1",
            fontSize: "14px",
            fontWeight: "600",
          }}
        >
          CONTACT US
        </span>

        <h2 className="fw-bold mt-2">
          Need more <span style={{ color: "#387ED1" }}>help?</span>
        </h2>

        <p
          style={{
            color: "#777",
            maxWidth: "600px",
            margin: "15px auto 0",
            lineHeight: "1.7",
          }}
        >
          Choose an option below to get assistance from the FINORA support team.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="row g-4 justify-content-center">
        {/* ================= EMAIL SUPPORT ================= */}
        <div className="col-lg-6 col-md-6">
          <div
            style={{
              border: "1px solid #e5eaf0",
              borderRadius: "18px",
              padding: "27px",
              textAlign: "center",
              backgroundColor: "#fff",
              height: "100%",
            }}
          >
            {/* Icon */}
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "16px",
                backgroundColor: "#eaf3ff",
                color: "#387ED1",
                fontSize: "22px",
                margin: "0 auto 20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <i className="fa-solid fa-envelope"></i>
            </div>

            {/* Title */}
            <h5 className="fw-bold">Email Support</h5>

            {/* Description */}
            <p
              style={{
                color: "#777",
                lineHeight: "1.7",
                marginTop: "15px",
              }}
            >
              Send your question to the FINORA support team and we'll get back
              to you.
            </p>

            {/* Button */}
            <button
              type="button"
              className="btn"
              style={{
                backgroundColor: "#387ED1",
                color: "#fff",
                borderRadius: "25px",
                padding: "10px 25px",
                fontWeight: "600",
                marginTop: "10px",
              }}
            >
              <i className="fa-solid fa-envelope me-2"></i>
              Email us
            </button>
          </div>
        </div>

        {/* ================= RAISE TICKET ================= */}
        <div className="col-lg-6 col-md-6">
          <div
            style={{
              border: "1px solid #e5eaf0",
              borderRadius: "18px",
              padding: "27px",
              textAlign: "center",
              backgroundColor: "#fff",
              height: "100%",
            }}
          >
            {/* Icon */}
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "16px",
                backgroundColor: "#eaf3ff",
                color: "#387ED1",
                fontSize: "22px",
                margin: "0 auto 20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <i className="fa-solid fa-ticket"></i>
            </div>

            {/* Title */}
            <h5 className="fw-bold">Raise a Ticket</h5>

            {/* Description */}
            <p
              style={{
                color: "#777",
                lineHeight: "1.7",
                marginTop: "15px",
              }}
            >
              Create a support request and keep track of your issue.
            </p>

            {/* Button */}
            <button
              type="button"
              className="btn"
              style={{
                backgroundColor: "#387ED1",
                color: "#fff",
                borderRadius: "25px",
                padding: "10px 25px",
                fontWeight: "600",
                marginTop: "10px",
              }}
            >
              <i className="fa-solid fa-ticket me-2"></i>
              Raise ticket
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSupport;
