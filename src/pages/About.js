import React from "react";
import { render } from "react-dom";
import Carousel from "../components/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const About = () => (
  <div class="container">
    <br></br>
    <Carousel />
  </div>
);

render(<About />, document.getElementById("root"));

export default About;
