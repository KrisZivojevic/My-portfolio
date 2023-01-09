import Skill from "./Skill";
import styles from "./Skills.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

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
    <div className={styles.about__style}>
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
        <svg id="visual" viewBox="0 0 1440 220" width="100%" height="300" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 128L26.7 147C53.3 166 106.7 204 160 238.5C213.3 273 266.7 304 320 305.2C373.3 306.3 426.7 277.7 480 243.2C533.3 208.7 586.7 168.3 640 165.7C693.3 163 746.7 198 800 212.8C853.3 227.7 906.7 222.3 933.3 219.7L960 217" fill="none" stroke-linecap="round" stroke-linejoin="miter" stroke="#154042" stroke-width="3"></path></svg>
      </div>
    </div>
  );
};

export default Skills;
