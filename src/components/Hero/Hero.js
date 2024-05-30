import React from 'react';
import PageTitle from '../PageTitle/PageTitle';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <PageTitle>Welcome to the To-Do App</PageTitle>
      <p className={styles.subtitle}>You can add, edit, and remove tasks.</p>
    </div>
  );
};

export default Hero;
