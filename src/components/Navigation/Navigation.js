import styles from './Navigation.module.css';
import Button from "../Button/Button";

const Navigation = () => {
  return (
    <nav className="styles.nav__wrapper">
      <div className={`${styles.nav__style} max-content`}>
        <div className="pl">K</div>
        <div className={`${styles.list} pr`}>
          <li>Home</li>
          <li>About</li>
          <li>Education</li>
          <li>Projects</li>
          <li>Contact</li>
          <li><Button name="Resume" /></li>
        </div>
      </div>
    </nav>
  )
};

export default Navigation;