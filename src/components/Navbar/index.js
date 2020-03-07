import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (

    <nav>

      <div className="nav-wrapper blue darken-2" >
         <a href="#" class="brand-logo left"><h5>WellMart Health Services and Pharmacy Solutions</h5></a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
             Main
            </Link>
          </li>
          <li>
            <Link
              to="/discover"
              className={window.location.pathname === "/discover" ? "nav-link active" : "nav-link"}
            >
             Pharmacy Search
            </Link>
          </li>
          <li>
            <Link
              to="/search"
              className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
            >
             Doctor Search
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
