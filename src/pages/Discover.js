import React, { Component } from "react";
import { render } from "react-dom";
import DiscoverCard from "../components/DiscoverCard";
import DoctorCard from "../components/DoctorCard";
import "../pages/style.css";

const Discover = () => (
  <div class="container" className="rowC">
    <DoctorCard />
    <DiscoverCard />
  </div>
);

render(<Discover />, document.getElementById("root"));

export default Discover;
