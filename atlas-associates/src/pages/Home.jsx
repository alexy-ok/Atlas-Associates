import React from 'react';
import styles from '../styles/Home.module.css';
import bellevue from '../images/bellevue.jpg';
function Home() {
  return (
    <>
    <div className={styles.page}>
      <div className = {styles.fullPage} >
        <img src={bellevue} alt="Bellevue" className={styles.image}/>
      </div>
      <div className = {styles.fullPage}>
        
      </div>
      <div className = {styles.fullPage}>
        
        </div>
    </div>
    </>
  );
}

export default Home;
