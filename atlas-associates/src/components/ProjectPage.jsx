import React from 'react';
import styles from '../styles/ProjectPage.module.css';
import { useParams } from 'react-router-dom';
import Projects from '../data/projects.jsx';
import NoPage from '../pages/NoPage';
import {useMediaQuery} from 'react-responsive';

const ProjectPage = () => {
  const { id } = useParams();
  const project = Projects.find(proj => proj.id === id);

  if (!project) return (<NoPage/>);

  const isMobile = useMediaQuery({ maxWidth: 1024 });

  let pClassName = styles.projectDescription;
  if (isMobile){
    pClassName = styles.projectDescriptionM;
  }

  return (

    
    <div>
        <title>{project.title} Project Page| Atlas Associates Architecture</title>
        <div className = {styles.main}>
          <div className = {pClassName}>
            <div className={styles.mainImage}>
                <img src={project.mainImage} alt={`${project.title} Main Image`} className={styles.mainImageImage} />
                {/*before image*/}
                {project.form === "Addition/Remodel" && project.beforeImage && (
                    <img src={project.beforeImage} alt={`${project.title} Before Image`} className={styles.beforeImage}/>
                  )
                }
            </div>
            <div className= {styles.desc}>
                <h1 className = {styles.title}>{project.title}</h1>
                <h2 className = {styles.location}>{project.location}</h2>
                <h2 className = {styles.location}>{project.form}</h2>
                <div className={styles.areaDesc}>
                  <p><b>Lot size: </b>{project.lotSize}</p>
                  <p><b>Building areas: </b>{project.buildingAreas}</p>
                </div>
                <p><b>Exterior Environment: </b>{project.exteriorEnvironment}</p>
                <p><b>Interior Environment: </b>{project.interiorEnvironment}</p>
            </div>
            
          </div>
          <div className={styles.imageGallery}>
              {project.images.map((image,index) => (
                <div key={index} className={styles.imageContainer}>
                  <img src={image} alt={`${project.title} Image: ${index + 1}`}/>
                </div>  
              ))}
            </div>
        </div>
    </div>
  );
}  

export default ProjectPage; 