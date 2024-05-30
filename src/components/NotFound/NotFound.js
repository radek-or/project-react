import React from 'react';
import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <h2 className={styles.title}>404 Not Found</h2>
    </div>
  );
};

export default NotFound;
