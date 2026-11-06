import React from "react";

function Stats() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row text-center">
        <div className="col-md-3 col-sm-6 mb-4">
          <i className="fa-solid fa-chart-line fs-1 mb-3"></i>
          <h4>Market Insights</h4>
          <p className="text-muted">
            Explore markets and stay informed with useful insights.
          </p>
        </div>

        <div className="col-md-3 col-sm-6 mb-4">
          <i className="fa-solid fa-briefcase fs-1 mb-3"></i>
          <h4>Portfolio Tracking</h4>
          <p className="text-muted">
            Monitor your investments and track your portfolio performance.
          </p>
        </div>

        <div className="col-md-3 col-sm-6 mb-4">
          <i className="fa-solid fa-bolt fs-1 mb-3"></i>
          <h4>Paper Trading</h4>
          <p className="text-muted">
            Practice trading with virtual money without real financial risk.
          </p>
        </div>

        <div className="col-md-3 col-sm-6 mb-4">
          <i className="fa-solid fa-layer-group fs-1 mb-3"></i>
          <h4>One Platform</h4>
          <p className="text-muted">
            Manage markets, trades, and your portfolio in one place.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Stats;
