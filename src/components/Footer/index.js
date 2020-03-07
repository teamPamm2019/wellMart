import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <span>
        <div class="container">
          <p class="footer-social">
            <a href="//www.facebook.com/">
              <img
                src="//assets.ama-assn.org/resources/images/home-page/icon-facebook.png"
                class="footerSocialIcons"
              ></img>
            </a>
            <a href="//www.twitter.com/">
              <img
                src="//assets.ama-assn.org/resources/images/home-page/icon-twitter.png"
                class="footerSocialIcons"
              ></img>
            </a>
            <a href="//www.linkedin.com/">
              <img src="//assets.ama-assn.org/resources/images/home-page/icon-linkedin.png" 
              class="footerSocialIcons"
              ></img>
            </a>
            <a href="//www.plus.google.com/">
              <img
                src="//assets.ama-assn.org/resources/images/home-page/icon-google.png"
                class="footerSocialIcons"
              ></img>
            </a>
          </p>
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
