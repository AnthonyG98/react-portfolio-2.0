import './App.css';
import Home from "./components/home"
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import { Link, animateScroll as scroll } from "react-scroll";

function App() {
       // document.addEventListener("mousemove", (e)=>{
       //        const cursor = document.querySelector(".cursor");
       //        cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
       // })
       // document.addEventListener("click", ()=>{
       //        const cursor = document.querySelector(".cursor");
       //        cursor.classList.add("cursor-click");
       //        setTimeout(()=>{
       //               cursor.classList.remove("cursor-click")
       //        }, 500)
       // })
       const openMenu = ()=>{
              const mobileNav = document.querySelector(".mobile-container");
              mobileNav.style.animation = "slide-right 1s ease";
              mobileNav.style.animationFillMode = "forwards";

              const barCloseOne = document.getElementById("close-one");
              const barCloseTwo = document.getElementById("close-two");

              barCloseOne.style.display = "block";
              barCloseTwo.style.display = "block";
       }
       const closeMenu = () =>{
              const mobileNav = document.querySelector(".mobile-container");
              mobileNav.style.animation = "slide-left 1s ease";
              mobileNav.style.animationFillMode = "forwards";


              const barCloseOne = document.getElementById("close-one");
              const barCloseTwo = document.getElementById("close-two");

              barCloseOne.style.display = "none";
              barCloseTwo.style.display = "none";
       }
  return (
         <>   
              <div className="cursor"></div>
              <div className="nav-container" onClick={openMenu}>
                     <div className='bar-container'>
                            <div className='bar' id='bar-one'></div>
                            <div className='bar' id='bar-two'></div>
                     </div>
                     <div className='mobile-container' onClick={closeMenu}>
                     <div className='bar-container' onClick={closeMenu}>
                            <div className='bar' id='close-one'></div>
                            <div className='bar' id='close-two'></div>
                     </div>
                     <Link className="link" to="home"
                            onClick={closeMenu}
                            spy={true}
                            smooth={true}
                            offset={-170}
                            duration={500}
                            activeClass='active'
                            >HOME</Link>
                            <Link className="link" to="about"
                            onClick={closeMenu}
                            spy={true}
                            smooth={true}
                            offset={-170}
                            duration={500}
                            activeClass='active'
                            >ABOUT ME</Link>
                            <Link className="link" to="projects"
                            onClick={closeMenu}
                            spy={true}
                            smooth={true}
                            offset={-170}
                            duration={500}
                            activeClass='active'
                            >PROJECTS</Link>
                            <Link className="link" to="contact"
                            onClick={closeMenu}
                            spy={true}
                            smooth={true}
                            offset={-170}
                            duration={500}
                            activeClass='active'
                            >CONTACT</Link>
                     </div>
                     <div className="links-container">
                            <Link className="link" to="home"
                            spy={true}
                            smooth={true}
                            offset={-170}
                            duration={500}
                            activeClass='active'
                            >HOME</Link>
                            <Link className="link" to="about"
                            spy={true}
                            smooth={true}
                            offset={-170}
                            duration={500}
                            activeClass='active'
                            >ABOUT ME</Link>
                            <Link className="link" to="projects"
                            spy={true}
                            smooth={true}
                            offset={-170}
                            duration={500}
                            activeClass='active'
                            >PROJECTS</Link>
                            <Link className="link" to="contact"
                            spy={true}
                            smooth={true}
                            offset={-170}
                            duration={500}
                            activeClass='active'
                            >CONTACT</Link>
                     </div>
              </div>
              <Home id="home"/>
              <About id="about"/>
              <Projects id="projects"/>
              <Contact id="contact"/>
         </>
  );
}

export default App;
