import styles from "./Project.module.css";
import { useEffect, useId } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Icon from "../Icon/Icon";

const Project = (props) => {
  const id = useId();
  useEffect(() => {
    Aos.init({ duration: 2000, disable: window.innerWidth < 678 });
  }, []);
  return (
    <article className={styles.project__wrapper} data-aos="fade-left">
      <div className={styles.project__icon}>
        <Icon type="github" link={props.github} />
        <Icon type="demo" link={props.demo} />
      </div>
      <h3>{props.projectTitle}</h3>
      <p className={styles.project__desc}>{props.desc}</p>
      <div className={styles.project__tech}>
        {props.tech.map((item) => (
          <span key={item + id}>{item}</span>
        ))}
      </div>
    </article>
  );
};

export default Project;
