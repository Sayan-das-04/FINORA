import React, { useState } from "react";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const faqs = [
    {
      question: "How do I create a FINORA account?",
      answer:
        "Choose the account opening option and follow the registration steps to create your FINORA account.",
    },
    {
      question: "How can I add money?",
      answer:
        "Open the funds section of your FINORA account and choose one of the available payment methods.",
    },
    {
      question: "How can I withdraw money?",
      answer:
        "Go to the withdrawal section and follow the instructions to transfer your available funds.",
    },
    {
      question: "I forgot my password. What should I do?",
      answer:
        "Use the password recovery option on the login screen and follow the verification steps.",
    },
    {
      question: "How can I contact FINORA support?",
      answer:
        "You can contact the support team through the contact options available at the bottom of this page.",
    },
  ];

  const handleToggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
    }
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
          <span
            style={{
              color: "#387ED1",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            FAQ
          </span>

          <h2 className="fw-bold mt-2">
            Frequently asked <span style={{ color: "#387ED1" }}>questions</span>
          </h2>

          <p
            style={{
              color: "#777",
              maxWidth: "600px",
              margin: "15px auto 0",
              lineHeight: "1.7",
            }}
          >
            Find answers to some of the most common FINORA support questions.
          </p>
        </div>

        <div
          style={{
            maxWidth: "850px",
            margin: "0 auto",
          }}
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#fff",
                border: "1px solid #e5eaf0",
                borderRadius: "14px",
                marginBottom: "12px",
                overflow: "hidden",
              }}
            >
              <button
                type="button"
                onClick={() => handleToggle(index)}
                style={{
                  width: "100%",
                  border: "none",
                  backgroundColor: "#fff",
                  padding: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  textAlign: "left",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                <span>{faq.question}</span>

                <i
                  className={
                    activeIndex === index
                      ? "fa-solid fa-minus"
                      : "fa-solid fa-plus"
                  }
                  style={{
                    color: "#387ED1",
                    marginLeft: "15px",
                  }}
                ></i>
              </button>

              {activeIndex === index && (
                <div
                  style={{
                    padding: "0 20px 20px",
                    color: "#777",
                    fontSize: "14px",
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
    </section>
  );
}

export default FAQ;
