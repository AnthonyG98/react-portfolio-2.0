import React from "react";
export default function Home() {
  return (
    <div class="home-container" id="home">
      <div className="home-text-container">
        <p className="hello">
          Hell<p className="comma">o</p>
        </p>
        <p className="hello">
          <br />
          I'm Anthony{" "}
          <p className="comma" id="g">
            G.
          </p>
        </p>{" "}
        <p className="frontend">A Front End Developer</p>
      </div>
      <div className="home-background"></div>
    </div>
  );
}
