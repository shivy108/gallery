import React, { useState } from "react";
import {IoIosArrowDroprightCircle} from 'react-icons/io'
import {IoIosArrowDropleftCircle} from 'react-icons/io'
import './style.scss'
import Project from "../Project";
import netflix from "../../assets/netflix.jpg";
import laptop from "../../assets/laptop.png";
import nike from "../../assets/nike-1.gif";

const DisplayProject = () => {
  const [one, setOne] = useState(true);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);

  const handleRight = () => {
    if (one) {
      setOne(false);
      setTwo(true);
    }
    if (two) {
      setTwo(false);
      setThree(true);
    }
    if (three) {
      setThree(false);
      setOne(true);
    }
  };

  const handleLeft = () => {
    if (one) {
      setOne(false);
      setThree(true);
    }
    if (three) {
      setThree(false);
      setTwo(true);
    }
    if (two) {
      setTwo(false);
      setOne(true);
    }
  };

  return (
    <div className="DisplayProject">
      <IoIosArrowDroprightCircle className="right" onClick={handleRight}/>
        
      <IoIosArrowDropleftCircle className="left" onClick={handleLeft}/>
        
      {one ? (
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
      ) : (
        <></>
      )}

      {two ? (
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
      ) : (
        <></>
      )}
      {three ? (
        <Project
          title="Online Shop"
          link="https://netflix-clone130678.web.app/"
          image={nike}
          technologies={["React", "Sass", "firebase", "typeScript", "Redux"]}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default DisplayProject;
