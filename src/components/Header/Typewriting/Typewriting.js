import Typewriter from "typewriter-effect";

const text = [
  'Front-end rising star.',
  'Curious about programming.',
  'CSS enthusiast.',
];

const pauseTime = 800;

const Typewriting = () => {
  return (

    <Typewriter
      options={{
        loop: true,
      }}
      onInit={(typewriter) => {
        typewriter
          // .pasteString(text[0], null)
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
