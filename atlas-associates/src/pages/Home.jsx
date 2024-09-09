import React from 'react';
import styles from '../styles/Home.module.css';

function Home() {
  return (
    <>
    <title>Atlas Associates Architecture | Bellevue, Washington</title>

    <div className={styles.page}>

      <div className={styles.fullPage} >
        <img src='./rendered.jpg' alt="Bellevue" className={styles.image}/>
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
