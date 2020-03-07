import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./Carousel.css";
export default () => (
  <Carousel autoPlay>
    <div>
      <img class="materialboxed" src="https://i.cbc.ca/1.5170035.1560210566!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/hospital-doctor.jpg" alt="1"/>
      <p className="legend" id="preview">Find Doctors Near You</p>
    </div>
    <div>
      <img class="img-responsive" src="https://media.gettyimages.com/photos/happy-pharmacist-working-at-a-drugstore-picture-id610573018" alt="2" />
      <p className="legend" id="preview">Find Closest Pharmacies and Compare Prescription Costs</p>
    </div>
    
  </Carousel>
);
