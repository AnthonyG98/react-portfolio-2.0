import React from "react";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-bio-container">
        <div className="bio-pic"></div>
        <p className="bio-text">
          <div className="about-head-container">
            <p className="home-bio-name">
              What<p className="comma">'</p>s Up<p className="comma">.</p>
            </p>
          </div>
          My name is Anthony Gonzalez, a Front End Developer from Los Angeles,
          California. Ever since I started my programming journey, I have made
          it my business to learn something new every day.
          <br />
          When I'm not behind a keyboard, you can catch me grooving with a
          guitar in my lap or drum sticks in my hand.
          <div className="skills-container">
            <p className="skills-head">Skills:</p>
            <p>REACT, NODE, EXPRESS, MYSQL</p>
          </div>
        </p>
      </div>
    </div>
  );
}
