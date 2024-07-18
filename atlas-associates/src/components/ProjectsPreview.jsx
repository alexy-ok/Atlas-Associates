// src/components/ProjectsPreview.js
import React from 'react';
import styles from '../styles/ProjectsPreview.module.css';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
function ProjectsPreview({input}) {
    return (
        <a className={styles.a} href={`/${input.type}/${input.id}`}>
            <div className={styles.imageContainer}>
                <img src= {input.thumbnail} alt={`link to ${input.title}`} height='300' width='300'/>
                <div className={styles.overlay}>
                    <div className={styles.text}>{input.title}</div>
                </div>
            </div>
            <MobileView>
                <p className={styles.p}>{input.title}</p>
            </MobileView>
        </a>
    );
}

export default ProjectsPreview;
