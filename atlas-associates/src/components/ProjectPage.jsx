import React from 'react';
import styles from '../styles/ProjectPage.module.css';
import { useParams } from 'react-router-dom';
import Projects from '../data/projects';
import NoPage from '../pages/NoPage';

const ProjectPage = () => {
  const { id } = useParams();
  const project = Projects.find(proj => proj.id === id);

  if (!project) return (<NoPage/>);
  return (
    <div>
        
        <div className = {styles.main}>
          <div className = {styles.projectDescription}>
             <div className={styles.Images}>
                <img src={project.mainImage} alt={project.title}  className="project-image"/>
            </div>
            <div className= {styles.desc}>
                <h1 className = {styles.title}>{project.title}</h1>
                <h2 className = {styles.location}>{project.location}</h2>
                <p>{project.description}</p>
            </div>
          </div>
        </div>
    </div>
  );
}  

export default ProjectPage; 