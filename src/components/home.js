import React from "react";
import jellyFishVideo from "../images/jellyvid.mp4";
export default function Home() {
  return (
    <div class="home-container" id="home">
      <div class="home-text-container">
        <div class="home-text-background">
          <div class="home-text">
            <p class="home-bio-name">
              Hey<p class="comma">,</p> I'm Anthony
            </p>
            <p class="home-bio-text">A Front-End Developer.</p>
            <div className="icon-container">
              <a
                className="icon"
                href="https://github.com/AnthonyG98"
                target="_blank"
              >
                <i class="fab fa-github"></i>
              </a>
              <a
                className="icon"
                href="https://www.linkedin.com/in/anthony-gonzalez-76a9171b7/"
                target="_blank"
              >
                <i class="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <video autoPlay muted loop className="video">
          <source src={jellyFishVideo} type="video/mp4" />
        </video>
        <div class="home-scrollbar"></div>
      </div>
    </div>
  );
}
