import React from 'react';
import '../styles/ProjectCard.css';
function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <a href = {project.link} target="_blank" rel="noreferrer">
            <img src={project.image} alt={project.name}  className="project-image"/>
            <h3 className="project-title">{project.name}</h3>
            </a>
        </div>
    );
}

export default ProjectCard;
