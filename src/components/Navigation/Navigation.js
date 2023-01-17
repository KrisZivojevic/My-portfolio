import styles from "./Navigation.module.css";
import Button from "../Button/Button";
import profile from "../../assets/images/logo.png";
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const scrollHandler = (event) => {
    const name = event.target.getAttribute("name");
    const element = document.getElementById(name);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <nav className={styles.nav__wrapper}>
      <div className={`${styles.nav__style} max-content`}>
        <div>
          <img src={profile} alt="logo" name="home" onClick={scrollHandler} />
        </div>
        <div className={styles.menu__icon} onClick={() => setIsOpen(prev => !prev)}>
          {
            isOpen ? <IoCloseOutline className={styles.nav__icon} /> : <HiMenuAlt3 className={styles.nav__icon} />
          }
        </div>
        <ul className={`${styles.list} ${styles.small_devices} ${isOpen && styles.show}`}>
          <li name="home" onClick={scrollHandler}>Home</li>
          <li name="about" onClick={scrollHandler}>About</li>
          <li name="projects" onClick={scrollHandler}>Projects</li>
          <li name="contact" onClick={scrollHandler}>Contact</li>
          <li>
            <a href="https://drive.google.com/file/d/1aOK_ebI8hqaoEcAuW94yw6eW7uG4EHVw/view?usp=sharing">
              <Button name="Resume" style={styles.nav__button} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
