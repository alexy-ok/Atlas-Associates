import React from 'react';
import styles from '../styles/Home.module.css';
import bellevue from '../images/bellevue.jpg';
function Home() {
  return (
    <>
    <title>Home Page</title>

    <div className={styles.page}>

      <div className={styles.fullPage} >
        <img src={bellevue} alt="Bellevue" className={styles.image}/>
        <div className={styles.overlay}>
          <div className={styles.text}>Bellevue Modern House</div>
        </div>
      </div>

      <div className={styles.fullPage}>
        
      </div>

      <div className={styles.fullPage}>
        
      </div>
      
    </div>
    </>
  );
}

export default Home;
