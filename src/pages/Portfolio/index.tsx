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
      <div className="Top"></div>
      <div className="Content">
        <nav className="NavBar">
          <h2 onClick={clickPortfolio}>Portfolio</h2>
          <h2 onClick={clickPortfolio}>About</h2>
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
