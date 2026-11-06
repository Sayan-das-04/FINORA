import React, { useState } from "react";

function PricingFAQ() {
  const [active, setActive] = useState(null);

  const faqs = [
    {
      question: "Is the pricing shown on this page real?",
      answer:
        "No. The pricing values shown on this FINORA portfolio project are demonstration values created for the website interface.",
    },
    {
      question: "Does brokerage apply to every investment?",
      answer:
        "Brokerage depends on the type of transaction and the applicable pricing structure. The examples on this page are for demonstration purposes.",
    },
    {
      question: "Are taxes included in the displayed amounts?",
      answer:
        "Displayed amounts are simplified examples. Applicable taxes and regulatory charges may vary depending on the transaction.",
    },
    {
      question: "Can pricing change in the future?",
      answer:
        "Yes. In a real financial platform, pricing can change based on products, services, regulations and business policies.",
    },
    {
      question: "Where can I understand the charges?",
      answer:
        "The sections above explain the main pricing categories and provide examples of how different charges can be presented.",
    },
  ];

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

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
            Pricing
            <span style={{ color: "#387ED1" }}> FAQs</span>
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
            Quick answers to common questions about FINORA pricing.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="pricing-faq-item bg-white"
                style={{
                  border: "1px solid #e5eaf0",
                  borderRadius: "12px",
                  marginBottom: "15px",
                  overflow: "hidden",
                }}
              >
                <button
                  className="w-100 border-0 bg-transparent text-start d-flex justify-content-between align-items-center"
                  onClick={() => toggleFAQ(index)}
                  style={{
                    padding: "20px",
                    fontWeight: "600",
                    color: "#333",
                  }}
                >
                  <span>{faq.question}</span>

                  <i
                    className={`fa-solid ${
                      active === index ? "fa-chevron-up" : "fa-chevron-down"
                    }`}
                    style={{
                      color: "#387ED1",
                    }}
                  ></i>
                </button>

                {active === index && (
                  <div
                    style={{
                      padding: "0 20px 20px",
                      color: "#777",
                      lineHeight: "1.7",
                    }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingFAQ;
