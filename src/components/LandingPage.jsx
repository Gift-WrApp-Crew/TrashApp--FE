import React from 'react';
import styles from './LandingPage.css';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const history = useNavigate();

  async function gotoFeed() {
    history('/posts');
  }

  return (
    <>
      <div className={styles.landingPageImage}>
        <img className={styles.firstImage} src="phone.png" />
      </div>
      <button onClick={gotoFeed} className={styles.Button}>
        Lets Get Started! ♻️
      </button>
    </>
  );
}
