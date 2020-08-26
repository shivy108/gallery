import React, { FunctionComponent } from "react";
import "./style.css";

type Props = {
  title: String;
  technologies: String;
  link: string;
};

const Project: FunctionComponent<Props> = ({ title, technologies, link }) => {
  return (
    <div className="projectContainer">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <h1 >{title}</h1>
      </a>
      <p>{technologies}</p>
    </div>
  );
};

export default Project;
