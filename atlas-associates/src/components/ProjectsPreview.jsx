// src/components/ProjectsPreview.js
import React from 'react';
import styles from '../styles/ProjectsPreview.module.css';

function ProjectsPreview(input) {
    return (
        
        <div className={styles.image-container}>
            <img src= {input.img} alt={input.alt}></img>
            <div className={styles.overlay}>
                <div className={styles.text}>{input.text}</div>
            </div>
        </div>
    );
}

export default ProjectsPreview;
