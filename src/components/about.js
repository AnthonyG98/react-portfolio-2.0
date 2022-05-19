import React from "react";

export default function About() {
  return (
    <div className="about-background">
      <div className="about-container">
        <div className="about-img-container">
          <div className="about-line"></div>
          <p className="about">ABOUT ME.</p>
          <div className="about-img"></div>
        </div>
        <div className="about-text-container">
          <div className="bio-text">
            <p>
              <p className="hello">
                H<p className="comma">i</p>
              </p>
              <br />
              My name is Anthony Gonzalez. A Front End Developer from Los
              Angeles, CA. I bring your designs to life with an emphasis on
              scalability and effiency. Ever since I have started my coding
              journey, I have made it my business to learn something new
              everyday!
            </p>
            <div className="social-container">
              <a href="https://github.com/AnthonyG98" target="_blank" rel="noreferrer">
                <i class="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/anthony-gonzalez-76a9171b7/"
                target="_blank" rel="noreferrer"
              >
                <i class="fa-brands fa-linkedin"></i>{" "}
              </a>
            </div>
          </div>
          <div className="skills-text">
            <p className="skills-head">
              S<p className="skills-head-color">kills</p>.
            </p>
            <div className="skills-container">
              <p>React</p>
              <p>Node</p>
              <p>Express</p>
              <p>MySQL</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
