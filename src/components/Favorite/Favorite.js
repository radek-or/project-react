import React from 'react';
import PageTitle from '../PageTitle/PageTitle';
import styles from './Favorite.module.scss';

const Favorite = () => {
  return (
    <div className={styles.favorite}>
      <PageTitle>Favorite</PageTitle>
      <p>This is the Favorite page.</p>
    </div>
  );
};

export default Favorite;
