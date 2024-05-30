import React from 'react';
import { useSelector } from 'react-redux';
import styles from "./Column.module.scss";
import Card from "./../Card/Card";
import CardForm from "./../CardForm/CardForm";

const Column = (props) => {
  const searchString = useSelector(state => state.searchString.toLowerCase());
  const cards = useSelector(state => state.cards.filter(card => 
    card.columnId === props.id && 
    card.title.toLowerCase().includes(searchString)
  ));

  return (
    <div className={styles.column}>
      <h2 className={styles.title}>
        <span className={styles.icon + " fa fa-" + props.icon} />
        {props.title}
      </h2>
      <ul className={styles.cards}>
        {cards.map((card) => (
          <Card key={card.id} title={card.title} />
        ))}
      </ul>
      <CardForm columnId={props.id} />
    </div>
  );
};

export default Column;
