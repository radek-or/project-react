// src/components/Column/Column.js

import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import { getFilteredCards } from '../../redux/cardsRedux';
import styles from './Column.module.scss';

const Column = ({ id, title, icon }) => {
  const cards = useSelector(state => getFilteredCards(state, id));

  return (
    <div className={styles.column}>
      <h2 className={styles.title}>
        <span className={styles.icon + ' fa fa-' + icon} />
        {title}
      </h2>
      <ul className={styles.cards}>
        {cards.map(card => (
          <Card key={card.id} {...card} />
        ))}
      </ul>
      <CardForm columnId={id} />
    </div>
  );
};

export default Column;
