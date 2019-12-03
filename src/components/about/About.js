import React from 'react';
import styles from './About.css';
import Anty from '../../anty.jpg';

const About = () => {
  return (
    <div className={styles.About}>
      <section>
        <img src={Anty}/>
        <div>
          <p>
          I am a Software Engineer based in Portland, Oregon. Specialized in the implementation of JavaScript and MERN stack to build well rounded applications. I am eager about furthering my knowledge of technology and gaining more experience with developing software that can solve real-world problems.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;