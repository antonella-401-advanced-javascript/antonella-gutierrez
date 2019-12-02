import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';

const Header = () => {
  return (
    <header className={styles.Header}>
      <h1>Antonella Gutierrez</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/Projects">Projects</Link>
      </nav>
    </header>
  );
};

export default Header;