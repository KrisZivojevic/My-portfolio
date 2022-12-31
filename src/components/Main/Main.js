import AOS from "aos";
import { useEffect } from "react";
import styles from "./Main.module.css";
import "aos/dist/aos.css";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

const Main = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <main>
      <section data-aos="fade-left" className={styles.main__section}>
        <article>Lorem Ipsum is simply dummy</article>
        <article>It is a long established fact</article>
      </section>
      <section data-aos="fade-right" className={styles.main__section}>
        <article>Lorem Ipsum is simply dummy</article>
        <article>It is a long established fact</article>
      </section>
      <section data-aos="fade-left" className={styles.main__section}>
        <article className={styles.main__article}>
          Lorem Ipsum is simply dummy
        </article>
        <article>It is a long established fact</article>
      </section>
      <Projects />
      <Contact />
    </main>
  );
};

export default Main;
