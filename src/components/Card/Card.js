import React from 'react';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import styles from './Card.module.scss';
import { toggleCardFavorite } from '../../redux/store';

const Card = ({ id, title, isFavorite }) => {
  const dispatch = useDispatch();

  const handleToggleFavorite = () => {
    console.log('Toggling favorite for card:', id);
    dispatch(toggleCardFavorite(id));
  };

  console.log('Rendering Card component with props:', { id, title, isFavorite });

  return (
    <li className={styles.card}>
      <span>{title}</span>
      <button 
        className={clsx(styles.favoriteButton, { [styles.isFavorite]: isFavorite })}
        onClick={handleToggleFavorite}
      >
        <i className="fa fa-star-o" />
      </button>
    </li>
  );
};

export default Card;
