import React from 'react';
import bashful from './BASHful-logo.png';
import tarot from './tarot.png';
import poke from './pokebowl.png';

const Projects = () => {
  return (
    <div>

      <a>
        <img src={bashful} />
      </a>

      <a>
        <img src={tarot} />
      </a>

      <a>
        <img src={poke} />
      </a>

    </div>
  );
};

export default Projects;