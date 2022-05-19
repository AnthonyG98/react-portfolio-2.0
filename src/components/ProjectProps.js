import React from "react";

function ProjectProps(props) {
  const closeModal = () => {
    const modal = document.querySelector(".project-props-background");
    modal.style.display = "none";
  };
  return (
    <div className="project-props-background">
      <div className="project-props-container">
        <div className="x">
          <i
            class="fas fa-times"
            onClick={() => {
              closeModal();
            }}
          ></i>
        </div>
        <div className="fix-props">
          <div className="props-img-container">
            <video autoPlay loop muted className="video">
              <img src={props.img} alt="project thumbnail" />
            </video>{" "}
          </div>
          <div className="props-description">
            <h1 className="props-head">{props.head}</h1>
            <p className="props-text">{props.text}</p>
            <a
              className="props-link"
              href={props.link}
              target="_blank"
              rel="noreferrer"
            >
              View Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectProps;
