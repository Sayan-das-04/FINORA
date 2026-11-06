import React from "react";

function Footer() {
  return (
    <footer
      className="mt-5"
      style={{
        backgroundColor: "#F8FAFC",
        color: "#475569",
      }}
    >
      <div className="container py-5">
        {/* Top Section */}
        <div className="row">
          {/* Finora */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h3 className="fw-bold mb-3" style={{ color: "#387ED1" }}>
              Finora
            </h3>

            <p className="small">
              A modern platform for investing, trading, and learning about the
              financial markets.
            </p>

            <p className="small mb-3">
              © 2026, Finora Technologies
              <br />
              All rights reserved.
            </p>

            {/* Social Media */}
            <div className="d-flex gap-3">
              <a
                href="#"
                className="text-decoration-none"
                style={{ color: "#475569" }}
              >
                <i className="fa-brands fa-x-twitter fs-5"></i>
              </a>

              <a
                href="#"
                className="text-decoration-none"
                style={{ color: "#475569" }}
              >
                <i className="fa-brands fa-instagram fs-5"></i>
              </a>

              <a
                href="#"
                className="text-decoration-none"
                style={{ color: "#475569" }}
              >
                <i className="fa-brands fa-youtube fs-5"></i>
              </a>

              <a
                href="#"
                className="text-decoration-none"
                style={{ color: "#475569" }}
              >
                <i className="fa-brands fa-linkedin fs-5"></i>
              </a>
            </div>
          </div>

          {/* Account */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="fw-bold text-dark mb-3">Account</h5>

            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Open an account
                </a>
              </li>

              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Trading account
                </a>
              </li>

              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Investment account
                </a>
              </li>

              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Portfolio
                </a>
              </li>

              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Fund transfer
                </a>
              </li>

              <li>
                <a href="#" className="text-decoration-none text-muted">
                  Account settings
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="fw-bold text-dark mb-3">Support</h5>

            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Contact us
                </a>
              </li>

              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Help center
                </a>
              </li>

              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  FAQs
                </a>
              </li>

              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Report an issue
                </a>
              </li>

              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  System status
                </a>
              </li>

              <li>
                <a href="#" className="text-decoration-none text-muted">
                  Feedback
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="fw-bold text-dark mb-3">Company</h5>

            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  About Finora
                </a>
              </li>

              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Our Mission
                </a>
              </li>

              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Careers
                </a>
              </li>

              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Blog
                </a>
              </li>

              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Contact
                </a>
              </li>

              <li>
                <a href="#" className="text-decoration-none text-muted">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="fw-bold text-dark mb-3">Quick Links</h5>

            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Pricing
                </a>
              </li>

              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Market Overview
                </a>
              </li>

              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Stock Screener
                </a>
              </li>

              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Market News
                </a>
              </li>

              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Calculators
                </a>
              </li>

              <li>
                <a href="#" className="text-decoration-none text-muted">
                  Education
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-4" />

        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="small text-muted mb-0">
              © 2026 Finora Technologies. All rights reserved.
            </p>
          </div>

          <div className="col-md-6 text-md-end mt-3 mt-md-0">
            <a href="#" className="btn btn-outline-secondary btn-sm me-2">
              <i className="fa-brands fa-google-play me-2"></i>
              Google Play
            </a>

            <a href="#" className="btn btn-outline-secondary btn-sm">
              <i className="fa-brands fa-apple me-2"></i>
              App Store
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
