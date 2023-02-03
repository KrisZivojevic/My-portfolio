import styles from "./Footer.module.css";
import {
  FaGithub,
  FaLinkedin,
  FaRegEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className={styles.footer__wave}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220"><path fill="#154042" fillOpacity="1" d="M0,64L48,69.3C96,75,192,85,288,112C384,139,480,181,576,165.3C672,149,768,75,864,53.3C960,32,1056,64,1152,90.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>
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
    </>
  );
};

export default Footer;
