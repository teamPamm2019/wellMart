import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar">
      {/* <a href="/" class="brand-logo left">
        <h5>WELL-MART Healthcare Providers and Pharmacy Solutions</h5>
      </a> */}
      <div className="nav-links">
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <Link
              to="/login"
              className={
                window.location.pathname === "/" ||
                window.location.pathname === "/login"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Login/Logout
            </Link>
          </li>
          {/* <li>
            <Link
              to="/"
              className={
                window.location.pathname === "/" ||
                window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </Link>
          </li> */}
          <li>
            <Link
              to="/discover"
              className={
                window.location.pathname === "/discover"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Find a Doctor
            </Link>
          </li>
          <li>
            <Link
              to="/search"
              className={
                window.location.pathname === "/search"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Find a Pharmacy
            </Link>
          </li>
          <li>
            <Link
              to="/news"
              className={
                window.location.pathname === "/news"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Healh & Wellness News
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
