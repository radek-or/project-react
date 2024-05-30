import React from 'react';
import PageTitle from '../PageTitle/PageTitle';
import styles from './About.module.scss';

const About = () => {
  return (
    <div className={styles.about}>
      <PageTitle>About</PageTitle>
      <p>This is a simple To-do application built with React.</p>
    </div>
  );
};

export default About;
