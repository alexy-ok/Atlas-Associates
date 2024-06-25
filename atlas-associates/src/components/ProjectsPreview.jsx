// src/components/ProjectsPreview.js
import React from 'react';
import styles from '../styles/ProjectsPreview.module.css';
function ProjectsPreview({input}) {
    return (
        <a className={styles.imageContainer} href={`/${input.type}/${input.id}`}>
        <div >
            <img src= {input.image} alt={`link to ${input.title}`}/>
            <div className={styles.overlay}>
                <div className={styles.text}>{input.title}</div>
            </div>
        </div>
        </a>
    );
}

export default ProjectsPreview;
