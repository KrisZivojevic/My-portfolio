import Skill from "./Skill";
import styles from "./Skills.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import wave from '../../assets/images/wave.svg';

const skillsList = [
  {
    id: 1,
    name: "HTML",
  },
  {
    id: 2,
    name: "CSS",
  },
  {
    id: 3,
    name: "JavaScript (ES6+)",
  },
  {
    id: 4,
    name: "React",
  },
  {
    id: 5,
    name: "SASS",
  },
  {
    id: 6,
    name: "GIT",
  },
  {
    id: 7,
    name: "GitHub",
  },
  {
    id: 8,
    name: "BEM",
  },
  {
    id: 9,
    name: "Responsive Design",
  },
];

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div id="about" className={styles.about__style}>
      <h2 className="section-title">About Me</h2>
      <div className={`${styles.about__wrapper} max-content`} data-aos="fade-right">
        <div className={styles.about__desc}>
          <h3>A Few Words About Me...</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>
        <div className={styles.skills__wrapper}>
          <h3>My Skills</h3>
          <ul className={styles.skills__list}>
            {skillsList.map((skill) => (
              <Skill
                key={skill.id}
                name={skill.name}
              />
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.about__svg}>
        <img src={wave} alt="wave" />
      </div>
    </div>
  );
};

export default Skills;
