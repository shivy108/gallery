import React from "react";
import ReactPlayer from "react-player";

import "./style.css";
import Quote from "../../components/Quote";
import { useHistory } from "react-router";

const App = () => {
  const { push } = useHistory();

  const onClickHandler = () => {
    push("/portfolio");
  };

  return (
    <div className="mainContainer">
      <ReactPlayer
        url="video/untitled.webm"
        width="100%"
        height="100%"
        style={{ opacity: 0.9 }}
        playing={true}
        loop={true}
        muted={true}
      />
      <div id="mainContent">
        <div id="mainQuotes">
          <header>
            <h1>Welcome</h1>
            <h3>Be Inspired</h3>
            <button onClick={onClickHandler}>Gallery</button>
          </header>
          <div>
            <Quote id="1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
