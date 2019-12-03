import React from 'react';
import styles from './About.css';

const About = () => {
  const profilePic = '../../Anty.jpg';
  return (
    <div className={styles.About}>
      <section>
        <img src={profilePic}/>
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