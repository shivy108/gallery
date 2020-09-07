import React, { useEffect, useState } from "react";

import "./style.scss";
import { FaChevronCircleDown } from "react-icons/fa";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { AiOutlineMail, AiOutlineGitlab } from "react-icons/ai";
import netflix from "../../assets/netflix.jpg";
import laptop from "../../assets/laptop.png";
import Project from "../../components/Project";
import nike from "../../assets/nike-1.gif";


const App = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    console.log(show);
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1000) {
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
    <div className="page" id='page'>
      <div className={show ? "navBlur" : "nav"}>
        <div className="navIconWrapper">
          <div className="iconWrapper1">
            <div className="iconWrapper2">
              <h4 className="navIcon">SD</h4>
            </div>
          </div>
        </div>
        <div className="navMenu">
          <h4 className="navItem"><a href="#page">Home</a></h4>
         <a href="#About"> <h4 className="navItem">About</h4></a>
          <a href="#Projects"><h4 className="navItem">Portfolio</h4></a>
          <a href="../../documents/resume.pdf" download="resume.pdf"><div className="navButtonWrapper">
            <h4 className="navButton">Resume</h4>
          </div></a>
        </div>
      </div>
      <div className="welcomeBlock">
        <FaChevronCircleDown className="icon" />
      </div>
      <div className="welcomeMessage">
        <h2 className="message">
          Hello, <h2 className="messageName">I am Shivesh</h2>
          <h2 className="messageName">I build things for the web</h2>
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
      <section className="projects" id='Projects'>
        <div className="wrapper">
          <h1 className="title">Things I've built</h1>
          <Project
            title="CV Generator"
            link="https://drive.google.com/file/d/1NmoW0M0gn1n19iPn2Hk7UMuC08_aPFf2/view?ts=5f31473b"
            image={laptop}
            technologies={[
              "react",
              "javascript",
              "django",
              "python",
              "docker",
              "react-pdf",
            ]}
          />
          <Project
            title="Netflix Clone"
            link="https://netflix-clone130678.web.app/"
            image={netflix}
            technologies={[
              "React",
              "styled-components",
              "firebase",
              "typeScript",
              "moviedb API",
              "react-youtube",
              "npm movie-trailer",
            ]}
          />
          <Project
            title="Online Shop"
            link="https://netflix-clone130678.web.app/"
            image={nike}
            technologies={["React", "Sass", "firebase", "typeScript", "Redux"]}
          />
        </div>
      </section>
    </div>
  );
};

export default App;
