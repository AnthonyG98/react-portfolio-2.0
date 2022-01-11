import React from 'react'
import JellyVideo from "../images/jellyfish.mp4"
export default function Home() {
       return (
              <div className="home-container" id="home">
                     <div className="video-container">
                     <video autoPlay loop muted className="video">
                     <source src={JellyVideo} type="video/mp4" />
                     </video> 
                     </div>
                     <div className="home-info-container">
                            <div className="home-text-container">
                            <p id="hello">HELLO,</p>
                            <p id="name">I'm Anthony G</p>
                            <p id="dev">A Front-End Developer</p>
                            </div>
                     </div>
                     <div className="arrow-container">
                            <div className="arrow"></div>
                     </div>
              </div>
       )
}
