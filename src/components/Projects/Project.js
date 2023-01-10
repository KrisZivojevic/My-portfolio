import styles from "./Project.module.css";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { useEffect, useId } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Project = (props) => {
  const id = useId();
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className={styles.project__wrapper} data-aos="fade-left">
      <div className={styles.project__icon}>
        <a href={props.github}><FaGithub color="#d4e8dc" className={styles.icon} /></a>
        <a href={props.demo}><FiExternalLink color="#d4e8dc" className={styles.icon} /></a>
      </div>
      <h3>{props.projectTitle}</h3>
      <p className={styles.project__desc}>{props.desc}</p>
      {/* {console.log(props.techList)} */}
      <div className={styles.project__tech}>
        {props.tech.map((item) => (
          <span key={item + id}>{item}</span>
        ))}
      </div>
    </div>
  );
};

export default Project;
