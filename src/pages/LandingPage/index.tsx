import React, { useEffect, useState } from "react";


import "./style.scss";
import { FaChevronCircleDown } from 'react-icons/fa';

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
        <FaChevronCircleDown className="icon"/>
      </div>
      <div className='welcomeMessage'>
        <h2 className='message'>
          Hello, <h2 className='messageName'>I am Shivesh</h2>
          <h2 className="messageName">I build things for the web</h2>
        </h2>
      </div>
    </div>
  );
};

export default App;
