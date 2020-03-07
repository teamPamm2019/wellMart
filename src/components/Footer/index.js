import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <span>
        <div class="container">
          <p class="footer-social">
            <a href="//www.facebook.com/" target="_blank">
              <img src="//assets.ama-assn.org/resources/images/home-page/icon-facebook.png"></img>
            </a>
            <a href="//www.twitter.com/" target="_blank">
              <img src="//assets.ama-assn.org/resources/images/home-page/icon-twitter.png"></img>
            </a>
            <a href="//www.linkedin.com/" target="_blank">
              <img src="//assets.ama-assn.org/resources/images/home-page/icon-linkedin.png"></img>
            </a>
            <a href="//www.plus.google.com/" target="_blank">
              <img src="//assets.ama-assn.org/resources/images/home-page/icon-google.png"></img>
            </a>
          </p>
          <p>
            Copyright 2019-
            <script type="text/javascript">
              var d = new Date();var x =
              document.getElementById("demo");document.write(d.getFullYear()+"
              ");
            </script>{" "}
            <a href="">WELL-MART Health and Pharmaceutical Services, Inc.</a>{" "}
            All rights reserved.
            <p class="footer-links">
              <a href="" title="contact us">
                Contact Us |
              </a>
              <a href="" title="terms of use">
                {" "}
                Term of Use |
              </a>
              <a href="" title="terms of privacy">
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
