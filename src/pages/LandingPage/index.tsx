import React, { useEffect, useState } from "react";

import "./style.scss";
import { FaChevronCircleDown } from "react-icons/fa";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { AiOutlineMail, AiOutlineGitlab } from "react-icons/ai";

const App = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    console.log(show);
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
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
    <div className='page'>
      <div className={show ? "navBlur" : "nav"}>
        <div className='navIconWrapper'>
          <div className='iconWrapper1'>
            <div className='iconWrapper2'>
              <h4 className='navIcon'>SD</h4>
            </div>
          </div>
        </div>
        <div className='navMenu'>
          <h4 className='navItem'>Home</h4>
          <h4 className='navItem'>About</h4>
          <h4 className='navItem'>Portfolio</h4>
          <div className='navButtonWrapper'>
            <h4 className='navButton'>Resume</h4>
          </div>
        </div>
      </div>
      <div className='welcomeBlock'>
        <FaChevronCircleDown className='icon' />
      </div>
      <div className='welcomeMessage'>
        <h2 className='message'>
          Hello, <h2 className='messageName'>I am Shivesh</h2>
          <h2 className='messageName'>I build things for the web</h2>
        </h2>
      </div>
      <div className='socialBar'>
        <div className='socialWrapper'>
          <a className='socialIcon' href="https://github.com/shivy108" target="_blank" rel="noopener noreferrer"><IoLogoGithub  /></a>
          <a href="https://www.linkedin.com/in/shivesh-dindayal-25291a111/" target="_blank" rel="noopener noreferrer"><IoLogoLinkedin className='socialIcon' /></a>
          <a href="mailto:shiveshdindayal@gmail.com"><AiOutlineMail className='socialIcon' /></a>
          <a href="https://gitlab.propulsion-home.ch/Shiv108" target="_blank" rel="noopener noreferrer"><AiOutlineGitlab className='socialIcon' /></a>
        </div>
      </div>
    </div>
  );
};

export default App;
