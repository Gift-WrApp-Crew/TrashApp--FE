/* eslint-disable max-len */
import LinkButton from './LinkButton';
import styles from './AboutUs.css';

export default function AboutUs() {
  return (
    <section className={styles.AboutUsContainer}>
      <h1>Meet the Team!</h1>
      <section className={styles.AboutUs}>
        <div className={styles.TeamMember}>
          <img className={styles.ImageContainer} src="./delaney.jpg" />
          <h3>Delaney Fogarty</h3>
          <div className={styles.Buttons}>
            <LinkButton link="https://github.com/delaneyfogarty" />
            <LinkButton link="https://www.linkedin.com/in/delaney-fogarty/" linkedin={true} />
          </div>
        </div>
        <div className={styles.TeamMember}>
          <img className={styles.ImageContainer} src="./delaney.jpg" />
          <h3>Beth Melesse</h3>
          <div className={styles.Buttons}>
            <LinkButton link="https://github.com/bethmelmtv" />
            <LinkButton link="https://www.linkedin.com/in/bethmelmtv/" linkedin={true} />
          </div>
        </div>
        <div className={styles.TeamMember}>
          <img className={styles.ImageContainer} src="./delaney.jpg" />
          <h3>Jeff Allison</h3>
          <div className={styles.Buttons}>
            <LinkButton link="https://github.com/JeffreyAllison" />
            <LinkButton link="https://www.linkedin.com/in/jeffrey-m-allison/" linkedin={true} />
          </div>
        </div>
        <div className={styles.TeamMember}>
          <img className={styles.ImageContainer} src="./delaney.jpg" />
          <h3>Hailey Steineke</h3>
          <div className={styles.Buttons}>
            <LinkButton link="https://github.com/hdsteineke" />
            <LinkButton link="https://www.linkedin.com/in/haileysteineke/" linkedin={true} />
          </div>
        </div>
      </section>
    </section>
  );
}
