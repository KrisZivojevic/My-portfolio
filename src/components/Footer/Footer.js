import styles from "./Footer.module.css";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaRegEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footer__wrapper} max-content`}>
        <h2>Learning step by step, day by day.</h2>
        <ul>
          <li>
            <a href="https://github.com/KrisZivojevic">
              <FaGithub className={styles.footer__icon} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/kristina-zivojevic/">
              <FaLinkedin className={styles.footer__icon} />
            </a>
          </li>
          <li>
            <a href="mailto:kristina.zivojevic@gmail.com">
              <FaRegEnvelope className={styles.footer__icon} />
            </a>
          </li>
        </ul>
        <p>Handcrafted by Kristina Živojević</p>
        <p className={styles.footer__copyright}>&#169; Copyright 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
