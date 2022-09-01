import React from 'react';
import styles from './LandingPage.css';

export default function LandingPage() {
  return (
    <div>
      <img className={styles.LandingPage} src="./photo.png" />
      <img className={styles.LandingPage} src="./photos.png" />
    </div>
  );
}
