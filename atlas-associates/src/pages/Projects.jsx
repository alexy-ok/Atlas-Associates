import styles from '../styles/Projects.module.css';
import React, { useState } from 'react';
import ProjectsPreview from '../components/ProjectsPreview';
import projects from '../data/projects';
function Projects ({type, name}){
    const residentialProjects = projects.filter(project => project.type === type);
    const newHomeProjects = projects.filter(project => project.form === 'New Home')

    return (

        <>
        <title>{name} Projects</title>

        <div className={styles.main}>
            <h1>{name} Projects</h1>
            <div className={styles.filter} hidden> 
                <p>Show Only: </p>
                <p>New Homes</p>
            </div>
            
            <div className={styles.grid}>
                {residentialProjects.map(project => (
                     <ProjectsPreview key={project.id} input={project}/>
                    
                ))}
            </div>

        </div>
        </>
    );
}

export default Projects;