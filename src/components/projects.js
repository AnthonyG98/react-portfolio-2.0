import React, { useState } from "react";

export default function Projects() {
  return (
    <>
      <div className="port-head" id="project">
        <div className="about-line"></div>
        <p className="about">
          PORTFOLIO<p className="comma">.</p>
        </p>
      </div>
      <div class="portfolio-container">
        <div class="portfolio-head-container">
          <p class="about-sub">Take a look at what I can do.</p>
        </div>
        <div class="project-container">
          <div class="project" id="project-one">
            <div className="project-btn-container">
              <a
                target="_blank"
                href="https://visionary-sorbet-e0ba84.netlify.app/"
                className="project-btn"
              >
                View Live
              </a>
              <a
                target="_blank"
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
                target="_blank"
                className="project-btn"
                href="https://sittingcleanmobiledetailing.com/"
              >
                View Live
              </a>
              <a
                target="_blank"
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
                target="_blank"
                href="https://postpoem.netlify.app/"
                className="project-btn"
              >
                View Live
              </a>
              <a
                target="_blank"
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
