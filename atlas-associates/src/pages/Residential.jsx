import styles from '../styles/Residential.module.css';
import React, { useState } from 'react';
import ProjectsPreview from '../components/ProjectsPreview';
function Residential (){
    const [projects, setProjects] = useState([
        { img: 'url1.jpg', alt: 'Description 1', text: 'Project 1' },
        { img: 'url2.jpg', alt: 'Description 2', text: 'Project 2' }
        // Add initial project details here
    ]);

    return (
        <div className={styles.main}>
            <h1>Residential Projects</h1>
            {/*
            {projects.map((project, index) => (
                    <ProjectsPreview key={index} img={project.img} alt={project.alt} text={project.text} className={styles.img}/>
                ))}
            */}
        </div>
    );
}

export default Residential;