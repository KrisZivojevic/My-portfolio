import styles from "./Navigation.module.css";
import Button from "../Button/Button";
import profile from "../../assets/images/logo.png";
import { useState } from "react";

const Navigation = (props) => {
  const [id, setId] = useState("");

  const getId = (event) => {
    const name = event.target.getAttribute("name");
    // console.log(typeof(name));
    setId(name);
  }
  
  const scrollHandler = () => {
    props.scrollHandler(id);
  }
  return (
    <nav className={styles.nav__wrapper}>
      <div className={`${styles.nav__style} max-content`}>
        <div>
          <img src={profile} alt="logo" />
        </div>
        <div className={`${styles.list} pr`}>
          <li name="home" onMouseOver={getId} onClick={scrollHandler}>Home</li>
          <li name="about" onMouseOver={getId} onClick={scrollHandler}>About</li>
          <li name="projects" onMouseOver={getId} onClick={scrollHandler}>Projects</li>
          <li name="contact" onMouseOver={getId} onClick={scrollHandler}>Contact</li>
          <li>
            <a href="https://drive.google.com/file/d/1aOK_ebI8hqaoEcAuW94yw6eW7uG4EHVw/view?usp=sharing">
              <Button name="Resume" style={styles.nav__button} />
            </a>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
