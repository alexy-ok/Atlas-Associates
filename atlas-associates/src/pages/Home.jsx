import React from 'react';
import styles from '../styles/Home.module.css';
import Bellevue3D from '../components/Bellevue3D';
function Home() {
  return (
    <>
    <title>Atlas Associates Architecture | Bellevue, Washington</title>

    <div className={styles.page}>

      <div className={styles.fullPage} >
        <img src='./rendered.jpg' alt="Bellevue" className={styles.image} hidden />
        <Bellevue3D/>
        <div className={styles.overlay}>
          <div className={styles.text}></div>
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
