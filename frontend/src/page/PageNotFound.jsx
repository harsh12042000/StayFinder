import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="text-center">
        <div className="emoji display-4 mb-4">😔</div>
        <h1 className="display-4">Page Not Found</h1>
        <p className="lead">
          The page you are looking for might be temporarily unavailable or does not exist.
        </p>
        <Link to="/" className="btn btn-primary">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
