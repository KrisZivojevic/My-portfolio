import styles from './Navigation.module.css';
import Button from "../Button/Button";
import profile from "../../assets/images/logo.png";

const Navigation = () => {
  return (
    <nav className={styles.nav__wrapper}>
      <div className={`${styles.nav__style} max-content`}>
        <div><img src={profile} alt='logo' /></div>
        <div className={`${styles.list} pr`}>
          <li>Home</li>
          <li>About</li>
          <li>Education</li>
          <li>Projects</li>
          <li>Contact</li>
          <li><a href="../../assets/cv/KristinaZivojevicCV.pdf" download><Button name="Resume" style={styles.nav__button} /></a></li>
        </div>
      </div>
    </nav>
  )
};

export default Navigation;