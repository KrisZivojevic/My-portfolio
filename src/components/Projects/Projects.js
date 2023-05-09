import Project from "./Project";
import styles from "./Projects.module.css";

const projectList = [
  {
    id: 1,
    title: "Webshop",
    desc: "A React webshop app is a platform built to browse products and add items to a cart. Users can create an account, navigate through the different product categories, view product details, and add items to their shopping cart.",
    demo: "https://webshop-kriszivojevic.vercel.app/",
    github: "https://github.com/KrisZivojevic/webshop",
    tech: ["HTML5 ", "CSS", "Flexbox", "React", "Fake Store API"],
  },
  {
    id: 2,
    title: "Tax Calculator",
    desc: "An app made for checking gross and net income, before and after tax. It consists of 2 tabs, where one is used for income data entry and the other is a table of results.",
    demo: "https://tax-calculator-sigma.vercel.app/",
    github: "https://github.com/KrisZivojevic/Tax-calculator",
    tech: ["HTML5 ", "CSS", "Flexbox", "Grid", "React"],
  },
  {
    id: 3,
    title: "GitHub User Search App",
    desc: "An application made for getting all information about GitHub users. Search is used to get information about one user. The user of the application needs to type a username to retrieve data about one specific user. If the user is not found, an error message will occur.",
    demo: "https://kriszivojevic.github.io/GitHub-Users/",
    github: "https://github.com/KrisZivojevic/GitHub-Users",
    tech: ["HTML5 ", "CSS", "Flexbox", "Grid", "JavaScript", "API"],
  },
  {
    id: 4,
    title: "Landing Page",
    desc: "A business presentation website.",
    demo: "https://kriszivojevic.github.io/Landing-Page-Template/",
    github: "https://github.com/KrisZivojevic/Landing-Page-Template",
    tech: ["HTML5", "CSS", "JavaScript", "Grid"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className={styles.projects__style}>
      <div className="max-content">
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
    </section>
  );
};

export default Projects;
