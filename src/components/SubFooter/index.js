import React from "react";
import "./style.css";

function SubFooter() {
  return (
    <div>
      <div className="SubFooter">
        <div>
            <div class="row">
                <div class="col-md-12">
                    <p className="SubFooterText">The Most Efficient Finder For All Your Medical Needs</p>
                </div>
            </div>
        </div>
      </div>

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
          <img
            src="//assets.ama-assn.org/resources/images/home-page/icon-linkedin.png"
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
    </div>
  );
}

export default SubFooter;
