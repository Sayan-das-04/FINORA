import React from "react";

function Pricing() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        {/* Card 1 */}
        <div className="col-md-3 mb-4">
          <div className="card h-100 border-0">
            <img
              src="/media/account-opening.png"
              className="card-img-top"
              alt="Free account opening"
            />

            <div className="card-body text-center">
              <h5 className="card-title">₹0</h5>
              <p className="card-text">Free account opening</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-3 mb-4">
          <div className="card h-100 border-0">
            <img
              src="/media/equity-delivery.png"
              className="card-img-top"
              alt="Equity delivery"
            />

            <div className="card-body text-center">
              <h5 className="card-title">₹0</h5>
              <p className="card-text">Equity delivery</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-3 mb-4">
          <div className="card h-100 border-0">
            <img
              src="/media/mutual-funds.png"
              className="card-img-top"
              alt="Direct mutual funds"
            />

            <div className="card-body text-center">
              <h5 className="card-title">₹0</h5>
              <p className="card-text">Direct mutual funds</p>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col-md-3 mb-4">
          <div className="card h-100 border-0">
            <img
              src="/media/intraday.png"
              className="card-img-top"
              alt="Intraday and F&O"
            />

            <div className="card-body text-center">
              <h5 className="card-title">₹20</h5>
              <p className="card-text">Intraday & F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
