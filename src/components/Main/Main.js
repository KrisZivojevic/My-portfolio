import AOS from "aos";
import { useEffect } from "react";
import styles from "./Main.module.css";
import "aos/dist/aos.css";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Skills from "../Skills/Skills";

const Main = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <main>
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
};

export default Main;
