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
                <img src={project.mainImage} alt={project.title} className="project-image"/>
            <div className= {styles.desc}>
                <h1 className = {styles.title}>{project.title}</h1>
                <h2 className = {styles.location}>{project.location}</h2>
                <p>{project.description}</p>
            </div>
            
          </div>
          <div className={styles.imageGallery}>
              {project.images.map((image,index) => (
                <div key={index} className={styles.imageContainer}>
                  <img src={image} alt={`${project.title} ${index + 1}`}/>
                </div>  
              ))}
            </div>
        </div>
    </div>
  );
}  

export default ProjectPage; 