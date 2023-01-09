import Project from "./Project";
import styles from "./Projects.module.css";

const projectList = [
  {
    id: 1,
    title: "GitHub User Search App",
    desc: "An application made for getting all information about GitHub users. Search is used to get information about one user. The user of the application needs to type a username to retrieve data about one specific user. If the user is not found, an error message will occur.",
    demo: "https://kriszivojevic.github.io/GitHub-Users/",
    github: "https://github.com/KrisZivojevic/GitHub-Users",
    tech: ["HTML5 ", "CSS", "Flexbox", "Grid", "JavaScript", "API"],
  },
  {
    id: 2,
    title: "Landing Page",
    desc: "A business presentation website.",
    demo: "https://kriszivojevic.github.io/Landing-Page-Template/",
    github: "https://github.com/KrisZivojevic/Landing-Page-Template",
    tech: ["HTML5", "CSS", "JavaScript", "Grid"],
  },
];

const Projects = () => {
  return (
    <div className={styles.projects__style}>
      <div className={`${styles.projects__wrapper} max-content`}>
        <h2 className="section-title">Projects</h2>
        <div className={styles.projects}>
          {projectList.map((project) => (
            <Project
              key={project.id}
              projectTitle={project.title}
              desc={project.desc}
              tech={project.tech}
              demo={project.demo}
              github={project.github}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
