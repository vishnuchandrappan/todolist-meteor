import React from "react";
import { Home } from "react-feather";
import { Link } from "react-router-dom";

export const NotFound = () => (
  <div className="full-page">
    <h1>404</h1>
    <h2>Not Found !</h2>

    <div className="btn-container">
      <Link to="/" className="btn">
        <Home />
        Home
      </Link>
    </div>
  </div>
);
