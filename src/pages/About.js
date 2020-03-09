import React from "react";
import { render } from "react-dom";
import Carousel from "../components/Carousel";
import AboutCardMission from "../components/AboutCardMission";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const About = () => (
  <div class="container">
    <br></br>
    <h6>WELL-MART Health Providers and Pharmacy Solutions</h6>
    <Carousel/>
    <AboutCardMission/>
  </div>
);

render(<About/>, document.getElementById("root"));

export default About;
