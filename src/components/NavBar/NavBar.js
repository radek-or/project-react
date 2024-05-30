import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../Container/Container';
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <Container>
        <div className={styles.navContent}>
          <Link to="/" className={styles.logo}>
            <i className="fa fa-tasks" />
          </Link>
          <ul className={styles.navLinks}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/favorite">Favorite</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
