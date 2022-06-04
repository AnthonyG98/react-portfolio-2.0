import "./App.css";
import Home from "./components/home";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";
import { Link, animateScroll as scroll } from "react-scroll";

function App() {
  const openMobileLinks = () => {
    const linksContainer = document.getElementById("mobile-links");
    linksContainer.style.left = "0%";
    console.log(linksContainer);
    //     linksContainer.style.display = "flex";
  };
  const closeMobileLinks = () => {
    const linksContainer = document.getElementById("mobile-links");
    linksContainer.style.left = "100%";
    //     linksContainer.style.display = "none";
  };
  return (
    <>
      <div className="mobile-nav-container" id="mobile-links">
        <div
          className="bar-container"
          onClick={() => {
            openMobileLinks();
          }}
        >
          <div className="bar" id="bar-one"></div>
          <div className="bar" id="bar-two"></div>
        </div>
        <div className="mobile-links-container">
          <Link
            className="link"
            to="home"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={closeMobileLinks}
          >
            HOME
          </Link>
          <Link
            className="link"
            to="about"
            spy={true}
            activeClass="active"
            smooth={true}
            offset={0}
            duration={500}
            onClick={closeMobileLinks}
          >
            ABOUT
          </Link>
          <Link
            className="link"
            to="project"
            spy={true}
            smooth={true}
            offset={0}
            activeClass="active"
            duration={500}
            onClick={closeMobileLinks}
          >
            PORTFOLIO
          </Link>
          <Link
            className="link"
            to="contact"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={closeMobileLinks}
          >
            CONTACT ME
          </Link>
        </div>{" "}
      </div>
      <div className="nav-container">
        <div className="links-container">
          <Link
            className="link"
            to="home"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            {/* <i class="fas fa-home"></i> */}
            HOME
          </Link>
          <Link
            className="link"
            to="about"
            spy={true}
            activeClass="active"
            smooth={true}
            offset={0}
            duration={500}
          >
            {/* <i class="fas fa-user"></i> */}
            ABOUT
          </Link>
          <Link
            className="link"
            to="project"
            spy={true}
            smooth={true}
            offset={0}
            activeClass="active"
            duration={500}
          >
            {/* <i class="fas fa-folder"></i> */}
            PORTFOLIO
          </Link>
          <Link
            className="link"
            to="contact"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            {/* <i class="fas fa-envelope"></i> */}
            CONTACT ME
          </Link>
        </div>
      </div>
      <Home id="home" />
      <About id="about" />
      <Projects id="projects" />
      <Contact id="contact" />
      <div className="footer">
        <p className="footer-text">
          <i class="far fa-copyright"></i>All Rights Reserved Anthony G.
        </p>
      </div>
    </>
  );
}

export default App;
