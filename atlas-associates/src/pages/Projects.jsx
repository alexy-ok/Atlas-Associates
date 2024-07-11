import styles from '../styles/Residential.module.css';
import React, { useState } from 'react';
import ProjectsPreview from '../components/ProjectsPreview';
import projects from '../data/projects';
function Projects ({type, name}){
    const residentialProjects = projects.filter(project => project.type === type);


    return (
        <div className={styles.main}>
            <h1>{name} Projects</h1>
            <div className={styles.grid}>
                {residentialProjects.map(project => (
                     <ProjectsPreview key={project.id} input={project}/>
                    
                ))}
            </div>
        </div>
    );
}

export default Projects;