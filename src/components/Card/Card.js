import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite, removeCard } from '../../redux/cardsRedux';
import clsx from 'clsx';
import styles from './Card.module.scss';

const Card = ({ id, title, isFavorite }) => {
  const dispatch = useDispatch();

  const handleFavoriteToggle = () => {
    dispatch(toggleCardFavorite(id));
  };

  const handleRemoveCard = () => {
    dispatch(removeCard(id));
  };

  return (
    <li className={styles.card}>
      <span className={styles.cardTitle}>{title}</span>
      <div>
        <button className={clsx(styles.favoriteButton, isFavorite && styles.isFavorite)} onClick={handleFavoriteToggle}>
          <i className="fa fa-star-o" />
        </button>
        <button className={styles.removeButton} onClick={handleRemoveCard}>
          <i className="fa fa-trash" />
        </button>
      </div>
    </li>
  );
};

export default Card;
