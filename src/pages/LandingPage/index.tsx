import React from "react";
import "./style.scss";
const App = () => {
  return (
    <div className="page">
      <div className="nav">
        <div className="navIconWrapper">
          <h4 className="navIcon">SD</h4>
        </div>
        <div className="navMenu">
          <h4 className="navItem">Home</h4>
          <h4 className="navItem">About</h4>
          <h4 className="navItem">Portfolio</h4>
          <div className="navButtonWrapper">
            <h4 className="navButton">Resume</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
