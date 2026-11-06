import React from "react";

function Categories() {
  const categories = [
    {
      icon: "fa-user",
      title: "Account & Profile",
      description:
        "Manage your account, profile details, login, security and verification.",
      topics: ["Account opening", "Profile settings", "Password & security"],
    },
    {
      icon: "fa-chart-line",
      title: "Trading & Orders",
      description:
        "Get help with placing orders, tracking trades and understanding order status.",
      topics: ["Place an order", "Order status", "Trading issues"],
    },
    {
      icon: "fa-wallet",
      title: "Funds & Payments",
      description:
        "Learn how to add money, withdraw funds and manage your payments.",
      topics: ["Add money", "Withdraw funds", "Payment issues"],
    },
    {
      icon: "fa-briefcase",
      title: "Portfolio",
      description:
        "Understand your holdings, positions, transactions and portfolio details.",
      topics: ["Holdings", "Positions", "Transaction history"],
    },
    {
      icon: "fa-seedling",
      title: "Investments",
      description:
        "Explore support for stocks, mutual funds and long-term investments.",
      topics: ["Stocks", "Mutual funds", "Investment basics"],
    },
    {
      icon: "fa-code",
      title: "FINORA Products",
      description:
        "Get technical help with FINORA platforms, APIs and developer tools.",
      topics: ["FINORA platform", "API access", "Technical issues"],
    },
  ];

  return (
    <section
      className="container"
      style={{
        paddingTop: "90px",
        paddingBottom: "100px",
      }}
    >
      {/* Heading */}
      <div className="text-center mb-5">
        <h2 className="fw-bold">
          Explore <span style={{ color: "#387ED1" }}>help topics</span>
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
          Find answers and useful guides organized around the things you use
          most on FINORA.
        </p>
      </div>

      {/* Categories */}
      <div className="row g-4">
        {categories.map((category, index) => (
          <div className="col-lg-4 col-md-6" key={index}>
            <div
              className="support-category h-100"
              style={{
                padding: "30px",
                backgroundColor: "#fff",
                border: "1px solid #e5eaf0",
                borderRadius: "18px",
                transition: "all 0.3s ease",
              }}
            >
              {/* Icon */}
              <div
                className="d-flex align-items-center justify-content-center"
                style={{
                  width: "54px",
                  height: "54px",
                  borderRadius: "15px",
                  backgroundColor: "#eaf3ff",
                  color: "#387ED1",
                  fontSize: "21px",
                  marginBottom: "22px",
                }}
              >
                <i className={`fa-solid ${category.icon}`}></i>
              </div>

              {/* Title */}
              <h5 className="fw-bold">{category.title}</h5>

              {/* Description */}
              <p
                className="mt-3"
                style={{
                  color: "#777",
                  lineHeight: "1.7",
                  fontSize: "15px",
                }}
              >
                {category.description}
              </p>

              {/* Topics */}
              <div className="mt-4">
                {category.topics.map((topic, topicIndex) => (
                  <div
                    key={topicIndex}
                    className="d-flex align-items-center mb-2"
                    style={{
                      color: "#387ED1",
                      fontSize: "14px",
                    }}
                  >
                    <i
                      className="fa-solid fa-arrow-right"
                      style={{
                        fontSize: "11px",
                        marginRight: "9px",
                      }}
                    ></i>

                    {topic}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
