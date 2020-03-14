import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./Carousel.css";

export default () => (
  <Carousel autoPlay>
    <div class="carousel carousel-slider">
      <img
        class="materialboxed"
        src="https://moneyinc.com/wp-content/uploads/2016/06/Doctors-750x479.jpg"
        alt="1"
      />
      <p className="legend">Find Doctors Near You</p>x
    </div>
    <div class="carousel carousel-slider">
      <img
        class="pharmacy"
        src="https://www.medprostaffing.com/wp-content/uploads/2019/05/iStock-922526244.jpg"
        alt="2"
      />
      <p className="legend">Compare Nearest Prescription Prices</p>
    </div>
    <div class="carousel carousel-slider">
      <img
        class="medicalNews"
        src="https://hhp-blog.s3.amazonaws.com/2016/04/medical-news-blog-04-22-16.jpg"
        alt="2"
      />
      <p className="legend">Learn The Latest Medical & Wellness News</p>
    </div>
  </Carousel>
);
