import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container text-center py-5">
      <h1
        className="fw-bold"
        style={{
          fontSize: "100px",
          color: "#387ED1",
          marginTop: "100px",
        }}
      >
        404
      </h1>

      <h2 className="fw-bold">Page Not Found</h2>

      <p className="text-muted mt-3">
        Sorry, the page you are looking for doesn't exist or may have been
        moved.
      </p>

      <Link
        to="/"
        className="btn fw-bold rounded-pill mt-3"
        style={{
          border: "2px solid #387ED1",
          color: "#387ED1",
        }}
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;
