import React from "react";

function WhyFinora() {
  return (
    <div className="container  mt-5">
      <div className="row p-2">
        <div className="col-6">
          <h3 className="mb-4">Trust with confidence</h3>
          <h4>Customer-first always</h4>
          <p>
            A simple and transparent platform designed to put investors first.
            Manage your portfolio, explore markets, and make informed decisions
            with FINORA.
          </p>
          <h4>No clutter, no distractions</h4>
          <p>
            Clean interfaces, useful information, and tools that stay out of
            your way. Use FINORA at your own pace, exactly the way you want.
          </p>
          <h4>The FINORA ecosystem</h4>
          <p>
            More than just a trading platform. FINORA brings markets, portfolio
            management, analytics, paper trading, and learning tools together in
            one ecosystem.
          </p>
          <h4>Do better with your money</h4>
          <p>
            Track your performance, understand your investments, and learn from
            your decisions. FINORA is designed to help you become a more
            informed investor.
          </p>
        </div>
        <div className="col-6 text-center">
          <img src="media/Award.png" style={{ maxWidth: "100%" }} alt=""></img>
          <div className="mt-4">
            <a href="/" className="me-4" style={{ textDecoration: "none" }}>
              Explore FINORA
            </a>
            <a href="/" style={{ textDecoration: "none" }}>
              Try paper trading
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyFinora;
