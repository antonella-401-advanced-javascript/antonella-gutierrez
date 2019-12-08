import React from 'react';
import bashful from './BASHful-logo.png';
import tarot from './tarot.png';
import poke from './pokebowl.png';
import styles from './Projects.css';

const Projects = () => {
  return (
    <div className={styles.Projects}>
      <section>
        <a href="https://github.com/Team-Dead-Ant/BASHful" target="_blank" rel="noopener noreferrer">
          <img src={bashful} />
          <p>
          Built using Node.js, Inquirer, MongoDB and Express.js.
CLI project that signs up/signs in an user, allows them to choose traits and fetches a match based on their input. The game will render a story based on the user selections which will simulate a date with their chosen match.
          </p>
        </a>
      </section>

      <section>
        <a href="https://github.com/tarot-reader/tarot-reader.github.io" target="_blank" rel="noopener noreferrer">
          <img src={tarot} />
          <p>
          Built using JavaScript, HTML and CSS.
Front-end application that intakes users DOB to provide them with the tarot card associated with their month, features a tarot reader which randomly generates the reading and a card matching game.

          </p>
        </a>
      </section>

      <section>
        <a href="https://github.com/PokeBowl/pokebowl" target="_blank" rel="noopener noreferrer">
          <img src={poke} />
          <p>
          Built using vanilla JavaScript and Express.js. A Pokemon-inspired RPG, users have to battle other Pokemon to increase their stats.
          </p>
        </a>
      </section>
    </div>
  );
};

export default Projects;