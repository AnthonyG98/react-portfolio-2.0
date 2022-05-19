import React, { useState } from "react";

export default function Projects() {
  return (
    <>
      <div className="port-head" id="project">
        <div className="about-line"></div>
        <p className="about">PORTFOLIO.</p>
      </div>
      <div class="portfolio-container">
        <div class="portfolio-head-container">
          <p class="about-sub">Take a look at what I can do.</p>
        </div>
        <div class="project-container">
          <div class="project" id="project-one">
            <div className="project-btn-container">
              <a
                href="https://visionary-sorbet-e0ba84.netlify.app/"
                className="project-btn"
              >
                View Live
              </a>
              <a
                className="project-btn"
                href="https://github.com/AnthonyG98/National-Park-API"
              >
                View Source
              </a>
            </div>
          </div>
          <div class="project" id="project-two">
            <div class="project-btn-container">
              <a
                className="project-btn"
                href="https://sittingcleanmobiledetailing.com/"
              >
                View Live
              </a>
              <a
                href="https://github.com/AnthonyG98/sitting-clean-mobile-detailing"
                class="project-btn"
              >
                View Source
              </a>
            </div>
          </div>
          <div class="project" id="project-three">
            <div class="project-btn-container">
              <a
                href="https://admirable-nasturtium-b65094.netlify.app/"
                className="project-btn"
              >
                View Live
              </a>
              <a
                href="https://github.com/AnthonyG98/post-poem"
                className="project-btn"
              >
                View Source
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
