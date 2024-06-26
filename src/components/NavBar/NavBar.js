import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from '../Container/Container';
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <Container>
        <div className={styles.navContent}>
          <NavLink to="/" className={styles.logo}>
            <i className="fa fa-tasks" />
          </NavLink>
          <ul className={styles.navLinks}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => isActive ? styles.linkActive : undefined}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/favorite"
                className={({ isActive }) => isActive ? styles.linkActive : undefined}
              >
                Favorite
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => isActive ? styles.linkActive : undefined}
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
