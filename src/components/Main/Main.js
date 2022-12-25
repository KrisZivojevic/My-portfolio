import AOS from "aos";
import { useEffect } from "react";
import { MainStyled } from "./Main.styled";
import "aos/dist/aos.css";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

const Main = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <MainStyled>
      <section data-aos="fade-left">
        <article>Lorem Ipsum is simply dummy</article>
        <article>It is a long established fact</article>
      </section>
      <section data-aos="fade-right">
        <article>Lorem Ipsum is simply dummy</article>
        <article>It is a long established fact</article>
      </section>
      <section data-aos="fade-left">
        <article>Lorem Ipsum is simply dummy</article>
        <article>It is a long established fact</article>
      </section>
      <Projects />
      <Contact />
    </MainStyled>
  );
};

export default Main;
