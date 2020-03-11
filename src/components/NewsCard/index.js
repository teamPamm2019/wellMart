import React from "react";
import "./style.css";

function NewsCard() {
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-12" id="header">
          <h3>Health & Wellness News</h3>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12" id="buttonArea"></div>
      </div>

      <div class="row">
        <div class="col-xs-9" id="gifArea"></div>
      </div>

      <div class="col-xs-3">
        <form>
          <fieldset>
            <h5 id="moreNews">Search Your Health Topic</h5>
            <input type="text" placeholder="E.g., Senior Care"></input>
            <button type="submit" class="btn submit" data="submitBtn">
              Submit
            </button>
          </fieldset>
        </form>
      </div>

      <script src="https://code.jquery.com/jquery.js"></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js"
        integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb"
        crossorigin="anonymous"
      ></script>
    </div>
  );
}

export default NewsCard;
