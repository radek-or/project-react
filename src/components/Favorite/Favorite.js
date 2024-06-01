import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import { getFavoriteCards } from '../../redux/store';
import styles from './Favorite.module.scss';

const Favorite = () => {
  const favoriteCards = useSelector(getFavoriteCards);
  console.log('Rendering Favorite component with cards:', favoriteCards);

  if (favoriteCards.length === 0) {
    return <p className={styles.noCards}>No cards...</p>;
  }

  return (
    <div className={styles.favoriteContainer}>
      <div className={styles.favorite}>
        <h2 className={styles.title}>Favorite</h2>
        <ul className={styles.cards}>
          {favoriteCards.map(card => (
            <Card key={card.id} {...card} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Favorite;
