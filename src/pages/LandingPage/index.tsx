import React, { useState } from "react";
import ReactPlayer from "react-player";

import "./style.css";
import Quote from '../../components/Quote';

const App = () => {
  
  return (
    <div className="mainContainer">
      <ReactPlayer
        url="video/untitled.webm"
        width="100%"
        height="100%"
        // style={{opacity:0.65}}
        playing={true}
        loop={true}
        muted={true}
      />
      <div className="mainContent">
        <h1 className="mainTitle">Title</h1>
        <h2>subtitle</h2>
        <button>Enter</button>
        <Quote/>
        
      </div>
    </div>
  );
};

export default App;
