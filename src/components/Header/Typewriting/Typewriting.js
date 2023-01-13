import Typewriter from "typewriter-effect";
import styles from './Typewriting.module.css';

const text = [
  'A front-end rising star.',
  'Curious about programming.',
  'A CSS enthusiast.',
];

const pauseTime = 800;

const Typewriting = () => {
  return (

    <Typewriter
      options={{
        loop: true,
        wrapperClassName: styles.typewriting
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString(text[0])
          .pauseFor(pauseTime)
          .deleteAll()
          .typeString(text[1])
          .pauseFor(pauseTime)
          .deleteAll()
          .typeString(text[2])
          .pauseFor(pauseTime)
          .start();
      }}
    >
    </Typewriter>
  );
};

export default Typewriting;
