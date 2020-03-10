import React, { Component } from "react";
import { render } from "react-dom";
import DiscoverCard from "../components/DiscoverCard";

const Discover = () => (
  <div class="container">
    <DiscoverCard />
  </div>
);

render(<Discover />, document.getElementById("root"));

export default Discover;
