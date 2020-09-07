import React, { FunctionComponent } from "react";
import "./style.scss";

type Props = {
  title: String;
  technologies: string[];
  link: string;
  image: string;
};

const Project: FunctionComponent<Props> = ({
  title,
  technologies,
  link,
  image,
}) => {
  console.log(technologies);
  return (
    <div className="projectContainer">
      <div className="imageWrapper">
        
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img className="image1" src={image} alt={image} />
          <div className="imageOverlay"></div>
        </a>
      </div>
      <div className="detailWrapper">
        <a
          className="ProjectTitle"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1 className='projectTitle'>{title}</h1>
        </a>
        <h4 className="techTitle">Technologies used</h4>
        <div className="ProjectTech">
          
          {technologies.map((item) => {
            return <p className="tech">{item}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
