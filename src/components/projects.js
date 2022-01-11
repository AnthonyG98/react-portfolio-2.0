import React, { useState } from 'react'
import projectOneThumbnail from "../images/projectonethumbnail.png"
import projectOneVideo from "../images/recordstorecrudapp.mp4"
import projectTwoThumbnail from "../images/postapp.png"
import projectTwoVideo from "../images/postsCRUDapp.mp4"
import projectThreeThumbnail from "../images/portfolio.png"
import projectThreeVideo from "../images/portfolio.mp4"
export default function Projects() {
       const [ video, setVideo ] = useState();
       const [ head, setHead] = useState(); 
       const [ text, setText ] = useState();
       const [ link, setLink ] = useState();


       const openProjectOne =() =>{
              const modal = document.querySelector(".project-props-background");
              modal.style.display = "flex"
              setVideo(projectOneVideo);
              setHead("Record Store CRUD App");
              setText("This record store application allows an admin user to create, replace, update, and delete inventory. The vinyls inside this inventory are then rendered both on the client side and server side.");
              setLink("https://github.com/AnthonyG98/OldTownRecords")
       }
       const openProjectTwo =() =>{
              const modal = document.querySelector(".project-props-background");
              modal.style.display = "flex"
              setVideo(projectTwoVideo);
              setHead("Post CRUD App");
              setText("This CRUD app allow users to sign up and login into their profile in order to post a status. Users can also change their own profile picture and cover image. Users can also view the profiles of other users.");
              setLink("https://github.com/AnthonyG98/postApp")
       }
       const openProjectThree =() =>{
              const modal = document.querySelector(".project-props-background");
              modal.style.display = "flex"
              setVideo(projectThreeVideo);
              setHead("Portfolio");
              setText("An online portfolio used to showcase my works as a web developer. It comes equipped with my information, projects, and a contact form that sends to my business email. It is fully mobile responsive as well.");
       }
       const closeModal = () =>{
              const modal = document.querySelector(".project-props-background");
              modal.style.display = "none"
       }
       return (
              <>
              <div className="projects-container" id='projects'>
                     <div className="projects-heading-container">
                            <div className="line"></div>
                            <h1 className="projects-head">PROJECTS</h1>
                     </div>
                     <div className="project-img-container">
                            <img className="project-img" 
                            id="project-one" 
                            src={projectOneThumbnail}
                            alt="project"
                            onClick={()=>{
                                   openProjectOne()
                            }}/>
                            <img className="project-img" 
                            id="project-two" 
                            src={projectTwoThumbnail} 
                            alt="project"
                            onClick={()=>{
                                   openProjectTwo();
                            }}/>
                            <img className="project-img" 
                            id="project-three" 
                            src={projectThreeThumbnail} 
                            alt="project"
                            onClick={()=>{
                                   openProjectThree()
                            }}/>
                     </div>
              </div>
              <div className='project-props-background'>
                     <div className='project-props-container'>
                            <div className="x">
                                          <i class="fas fa-times" onClick={()=>{
                                                 closeModal()
                                          }}></i>
                                   </div>
                                   <div className="fix-props">
                                          <div className="props-img-container">
                                          <video key={video} autoPlay loop muted className="video">
                                                 <source src={video} type="video/mp4" />
                                          </video>                                    </div>
                                          <div className="props-description">
                                                 <h1 className="props-head">{head}</h1>
                                                 <p className='props-text'>{text}</p>
                                                 <a className='props-link' href={link} target="_blank"rel="noreferrer">View Source Code</a>
                                          </div>
                                   </div>
                     </div>
              </div>
              </>
       )
}
