import React from "react";
import "./style.css";

const Header = props => (
  <div>
    <ul>
      <li>
        <p>
          <strong>latitude: {props.laT1}</strong>
        </p>
      </li>
      <li>
        <p>
          <strong>longitude: {props.lnG1}</strong>
        </p>
      </li>
    </ul>
  </div>
);

export default Header;
