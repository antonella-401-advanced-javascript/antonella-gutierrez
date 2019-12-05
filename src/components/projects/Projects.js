import React from 'react';
import bashful from './BASHful-logo.png';
import tarot from './tarot.png';
import poke from './pokebowl.png';
import styles from './Projects.css';

const Projects = () => {
  return (
    <div className={styles.Projects}>
      <section>
        <a>
          <img src={bashful} />
          <p>
            I will be writing a description about what Bashful does and the tech stack used.
          </p>
        </a>
      </section>

      <section>
        <a>
          <img src={tarot} />
          <p>
            I will be writing a description about what Tarot does and the tech stack used.
          </p>
        </a>
      </section>

      <section>
        <a>
          <img src={poke} />
          <p>
            I will be writing a description about what Pokebowl does and the tech stack used.
          </p>
        </a>
      </section>
    </div>
  );
};

export default Projects;