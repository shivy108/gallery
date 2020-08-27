import React from "react";

import "./style.css";
import Quote from "../../components/Quote";
import { useHistory } from "react-router";

const App = () => {
  const { push } = useHistory();

  const onClickHandler = () => {
    push("/portfolio");
  };

  return (
    <div className="section">
      <div className="content">
        <h1>Welcome</h1>
        <h3>Be Inspired</h3>
        <button onClick={onClickHandler}>Gallery</button>
        <div className="quoteWrapper">
          
          <Quote id="1" />
        </div>
      </div>
      <div className="videoWrapper">
        <div className="colorOverlay"></div>
        <video autoPlay loop muted playsInline>
          <source src="video/untitled.webm" type="video/webm" />
        </video>
      </div>
    </div>
  );
};

export default App;
