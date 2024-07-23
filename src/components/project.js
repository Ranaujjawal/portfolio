// ProjectCard.js

import React from 'react';
import PropTypes from 'prop-types';
import './css/project.css'; // Import your CSS file for styling

const ProjectCard = ({ title, description, imageUrl, githubLink, demoLink }) => {
  return (
    <section id="projects"   className="project-card">
      <div className="project-image">
        <img src={imageUrl} alt={title} className="imagesize" />
        <div className="overlay">
          <div className="project-links">
            <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
            {demoLink && <a href={demoLink} target="_blank" rel="noopener noreferrer">Demo</a>}
          </div>
        </div>
      </div>
      <div className="project-details">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </section>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  demoLink: PropTypes.string,
};

export default ProjectCard;
