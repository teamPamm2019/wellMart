import React from "react";
import { render } from "react-dom";
import Carousel from "../components/Carousel";
import AboutCardMission from "../components/AboutCardMission";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "../components/Footer";

const About = () => (
  <div class="container">
    <br></br>
    <Carousel />

  </div>
  
);

render(<About />, document.getElementById("root"));

export default About;
