import React from 'react'

export default function About() {
       return (
              <div className="about-container">
                     <div className="heading-container">
                            <div className="line"></div>
                            <h1 className="about-head" id="about">ABOUT ME</h1>
                     </div>
                     <div className="about-text-container">
                            <p className="about-text">
                                   Hello, I am <p className="blue">Anthony Gonzalez</p>, a <p className="blue">Front-End Developer </p> 
                                   that brings your web designs to life. Shoot me a message if you need a website that you would proud 
                                   to own.
                                   <div className="icon-links-container">
                                          <i class="fab fa-github">
                                                 <p className="icon"><a className='icon' href='https://github.com/AnthonyG98' target="_blank">GITHUB</a></p>
                                          </i>
                                   </div>
                            </p>
                            
                            <div className="tools-container"> 
                                   <p className="tools">TOOLS</p>
                                   <div className="icon-container">
                                          <div className="icon-section">
                                                 <i class="fas fa-chevron-right"><p className="icon">React</p></i>
                                                 <i class="fas fa-chevron-right"><p className="icon">JavaScript</p></i>
                                                 <i class="fas fa-chevron-right"><p className="icon">WordPress</p></i>
                                          </div> 
                                          <div className="icon-section-two">
                                                 <i class="fas fa-chevron-right"><p className="icon">CSS</p></i>
                                                 <i class="fas fa-chevron-right"><p className="icon">HTML</p></i>
                                                 <i class="fas fa-chevron-right"><p className="icon">PhotoShop</p></i>
                                          </div>
                                          

                                   </div>
                            </div>
                     </div>
                     
              </div>
       )
}
