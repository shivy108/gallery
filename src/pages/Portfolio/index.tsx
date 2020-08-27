import React, { useState } from "react";
import "./style.css";
import Project from "../../components/Project";

const Portfolio = () => {
  const [isPortfolio, setIsPortfolio] = useState(true);

  const clickPortfolio = () => {
    setIsPortfolio(!isPortfolio);
  };
  return (
    <div className="Page">
      <div className="Top">
        <div className="title">
          <h1>Shivesh Dindayal</h1>
          <h3>Full-Stack Engineer</h3>
          <h5>Swiss Permit B</h5>
          <h5>South African</h5>
        </div>
        <div className="details">
          <p>
            <a
              href="https://github.com/shivy108"
              rel="noopener noreferrer"
              target="_blank"
            >
              github.com/shivy108
            </a>
          </p>
          <p>
            <a href="www.linkedin.com/in/shiv108">linkedin.com/in/shiv108</a>
          </p>
          <p>
            <a href="https://gitlab.propulsion-home.ch/Shiv108">
              gitlab.propulsion-home.ch/Shiv108
            </a>
          </p>
          
        </div>
      </div>
      <div className="Content">
        <nav className="NavBar">
          <h2 onClick={clickPortfolio}>Portfolio</h2>
          {/* <h2 onClick={clickPortfolio}>About</h2> */}
        </nav>
        <Project
          title="Jobtracker-Resume Generator"
          technologies="React,Django,Docker,React-pdf,styled-components,redux"
          link="https://drive.google.com/file/d/1NmoW0M0gn1n19iPn2Hk7UMuC08_aPFf2/view?ts=5f31473b"
        />
        <Project
          title="Netflix Clone"
          technologies="React,styled-components"
          link="https://netflix-899fc.web.app/"
        />
      </div>
    </div>
  );
};
export default Portfolio;
