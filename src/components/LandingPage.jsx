import React from 'react';
import styles from './LandingPage.css';

export default function LandingPage() {
  async function gotoFeed() {
    location.replace('/posts');
  }
  return (
    <>
      <div>
        <img className={styles.firstImage} src="welcome.png" />
        <img className={styles.firstImage} src="darkel.png" />
        <img className={styles.firstImage} src="phone.png" />
      </div>
      <button onClick={gotoFeed} className={styles.Button}>
        Lets Get Started! ♻️
      </button>
    </>
  );
}
