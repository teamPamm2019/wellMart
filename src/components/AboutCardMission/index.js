import React from "react";
import CardBtn from "../CardBtn";
import "./style.css";

function Card(props) {
  return (
    <div>
      <div class="container" className="AboutCardBody">
        <p>
        <strong>The Best Place To Be Your Best.</strong><br></br><br></br>That’s our challenge to people who take
        pride in what they do and want ongoing opportunities to do it better.
        <br></br><br></br>Baptist Health South Florida is a community of people who care
        for one another, and who help each other excel so that everyone achieves
        his or her personal best. But what is it that makes Baptist Health South
        Florida so distinctive and unique among other healthcare organizations?
        Quite simply, it’s our commitment to putting quality first in everything
        we do. At Baptist Health, we work together to create a level of quality
        that could only be accomplished with a dedicated, collaborative team.
        <br></br><br></br>We are once again one of the 2019 Fortune 100 Best Companies
        to Work For. This is the 19th time Baptist Health has been named to the
        prestigious list. This recognition is based on employee ratings of their
        workplace culture, including the level of trust they feel towards
        leaders, the pride they take in their jobs and the camaraderie they
        experience with co-workers.
        </p>
      </div>
    </div>
  );
}

export default Card;
