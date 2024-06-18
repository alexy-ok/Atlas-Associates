import React from 'react';
import styles from '../styles/ProjectPage.module.css';

const highlightType = (type) => {
  if (type === 'Residential') {
    return styles.residential;
  } else if (type === 'Commercial') {
    return styles.commercial;
  }
}

function ProjectPage(input) {
  return (
    <div>
        
        <div className = {styles.main}>
          <div className = {styles.projectDescription}>
          <div className='Image'>
                <img src={input.image} alt={input.name}  className="project-image"/>
            </div>
            <div className= {styles.desc}>
                <h1 className = {styles.title}>{input.name}</h1>
                <h2 className = {styles.location}>{input.location}</h2>
                <p>{input.desc}</p>
            </div>
          </div>
        </div>
    </div>
  );
}  

export default ProjectPage; 