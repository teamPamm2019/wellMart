import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (

    <nav className="navbar">
      <a href="#" class="brand-logo left">
        <h5>WELL-MART Healthcare Providers and Pharmacy Solutions</h5>
      </a>


    <nav>

      <div className="nav-wrapper blue darken-2" >

        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
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
          </li>
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
