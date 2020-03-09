import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <span>
        <div class="container">
          <p>
            Copyright 2019
            <a href="" class="footer-links">
              {" "}
              WELL-MART Health and Pharmaceutical Services, Inc.
            </a>{" "}
            All rights reserved.
            <p class="footer-links">
              <a href="" title="contact us" class="footer-links">
                Contact Us |
              </a>
              <a href="" title="terms of use" class="footer-links">
                {" "}
                Term of Use |
              </a>
              <a href="" title="terms of privacy" class="footer-links">
                {" "}
                Privacy Policy
              </a>
            </p>
          </p>
        </div>
      </span>
    </footer>
  );
}

export default Footer;
