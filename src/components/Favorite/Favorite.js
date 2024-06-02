import React from 'react';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/cardsRedux'; // Import z właściwego pliku
import Card from '../Card/Card';
import styles from './Favorite.module.scss';

const Favorite = () => {
  const favoriteCards = useSelector(getFavoriteCards);

  if (favoriteCards.length === 0) {
    return <p className={styles.noCards}>No favorite cards...</p>;
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
