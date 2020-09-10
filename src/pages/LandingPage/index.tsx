import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";

import "./style.scss";
import { FaChevronCircleDown } from "react-icons/fa";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { AiOutlineMail, AiOutlineGitlab } from "react-icons/ai";
import DisplayProject from "../../components/DisplayProject";


const App = () => {
  const [show, handleShow] = useState(false);

  const [state, toggle] = useState(true);
  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { duration: 1000 },
  });

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 621) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        handleShow(false);
      });
    };
  }, [show]);

  return (
    <div className="page" id="page">
      <div className={show ? "navBlur" : "nav"}>
        <div className="navIconWrapper">
          <div className="iconWrapper1">
            <div className="iconWrapper2">
              <h4 className="navIcon">SD</h4>
            </div>
          </div>
        </div>
        <div className="navMenu">
          <h4 className="navItem">
            <a href="#page">Home</a>
          </h4>
          <a href="#About">
            {" "}
            <h4 className="navItem">About</h4>
          </a>
          <a href="#Projects">
            <h4 className="navItem">Portfolio</h4>
          </a>
          <a href="../../documents/resume.pdf" download="resume.pdf">
            <animated.div
              style={{
                opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
                transform: x
                  .interpolate({
                    range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                    output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
                  })
                  .interpolate((x) => `scale(${x})`),
              }}
            >
              <div onClick={() => toggle(!state)} className="navButtonWrapper">
                <h4 className="navButton">Resume</h4>
              </div>
            </animated.div>
          </a>
        </div>
      </div>
      <div className="welcomeBlock">
        <div className="bird-container bird-container--one">
          <div className="bird bird--one"></div>
        </div>

        <div className="bird-container bird-container--two">
          <div className="bird bird--two"></div>
        </div>

        <div className="bird-container bird-container--three">
          <div className="bird bird--three"></div>
        </div>

        <div className="bird-container bird-container--four">
          <div className="bird bird--four"></div>
        </div>
        <a href="#About"><FaChevronCircleDown className="icon" /></a>
      </div>
      <div  className="welcomeMessage">
        <h2 className="message">
          Hello, I am Shivesh
          I build things for the web
        </h2>
      </div>
      <div className="socialBar">
        <div className="socialWrapper">
          <a
            className="socialIcon"
            href="https://github.com/shivy108"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/shivesh-dindayal-25291a111/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoLinkedin className="socialIcon" />
          </a>
          <a href="mailto:shiveshdindayal@gmail.com">
            <AiOutlineMail className="socialIcon" />
          </a>
          <a
            href="https://gitlab.propulsion-home.ch/Shiv108"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineGitlab className="socialIcon" />
          </a>
        </div>
      </div>
      <section className="about" id="About">
        <div className="wrapper">
          <h1 className="title">About me</h1>
          <p className="aboutPara">
            I am Shivesh, a software engineer based in Zurich. I enjoy creating
            cool and clever interactive applications with React, Angular,
            Typescript, JavaScript, Python, Django and Docker. I am always up
            for a challenge or to learn something new.
          </p>
        </div>
      </section>
      <section className="projects" id="Projects">
        <div className="wrapper">
          <h1 className="title">Things I've built</h1>
          <DisplayProject/>
        </div>
      </section>
      
    </div>
  );
};

export default App;
