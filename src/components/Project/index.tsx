import React, { FunctionComponent } from "react";
import "./style.scss";

type Props = {
  title: String;
  technologies: String;
  link: string;
  image1: string;
  image2: string;
};

const Project: FunctionComponent<Props> = ({
  title,
  technologies,
  link,
  image1,
  image2,
}) => {
  return (
    <div className='projectContainer'>
      <a
        className='ProjectTitle'
        href={link}
        target='_blank'
        rel='noopener noreferrer'>
        <h1>{title}</h1>
      </a>
      <div className='imageWrapper'>
        <img className='image1' src={image1} alt={image1} />
        <img src={image2} alt={image2} className='image2' />
        <p className='ProjectTech'>{technologies}</p>
      </div>
      
    </div>
  );
};

export default Project;
