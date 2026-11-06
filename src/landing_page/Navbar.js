import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="navbar fixed-top navbar-expand-lg py-1"
      style={{
        backgroundColor: "#fff5f5",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
      }}
    >
      <div className="container">
        {/* Logo + Brand */}
        <Link
          className="navbar-brand d-flex align-items-center fw-bold"
          to="/"
          onClick={() => setIsOpen(false)}
          style={{
            color: "#387ED1",
            fontSize: "20px",
          }}
        >
          <img
            src="media/Logo.png"
            alt="Finora Logo"
            style={{
              width: "28px",
              height: "28px",
              objectFit: "contain",
              marginRight: "6px",
            }}
          />
          Finora
        </Link>

        {/* Mobile Toggler */}
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <Link
                className="nav-link px-3"
                to="/signup"
                onClick={() => setIsOpen(false)}
              >
                Signup
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link px-3"
                to="/products"
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link px-3"
                to="/pricing"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link px-3"
                to="/support"
                onClick={() => setIsOpen(false)}
              >
                Support
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link px-3"
                to="/about"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
