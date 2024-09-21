import React from 'react';
import styles from '../styles/Home.module.css';
import HomeVideo from '../components/HomeVideo';
import timelapseVideo  from '../data/timelapse.mp4';
function Home() {
  return (
    <>
    <title>Atlas Associates Architecture | Bellevue, Washington</title>

    <div className={styles.page}>

      <div className={styles.fullPage} hidden>
        <img src='./rendered.jpg' alt="Bellevue" className={styles.image}/>
        <div className={styles.overlay}>
          <div className={styles.text}></div>
        </div>
      </div>

      
      <div className={styles.fullPage}>
        <HomeVideo/>
      </div>
      
    </div>
    </>
  );
}

export default Home;
