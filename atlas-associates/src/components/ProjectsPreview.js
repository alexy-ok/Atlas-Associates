// src/components/ProjectsPreview.js
import React from 'react';
import ProjectCard from './ProjectCard.js'; // Assume this is another component you create
import '../styles/ProjectsPreview.css';
const projects = [{id: 1, name: 'Modern House', image: '../images/placeholder_main.jpg', link: '/modern-house'}];

function ProjectsPreview() {
    return (
        <div>
            <h2>Featured Projects</h2>
            <div>
                {projects.map(project => (
                    <ProjectCard key={project.id} project={project} link = {project.link}/>
                ))}
            </div>
        </div>
    );
}

export default ProjectsPreview;
