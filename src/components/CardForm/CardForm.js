import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './CardForm.module.scss';
import Button from '../Button/Button';
import { addCard } from '../../redux/cardsRedux';

const CardForm = ({ columnId }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCard({ columnId, title }));
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.cardForm}>
      <input
        type="text"
        placeholder="Enter card title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={styles.input}
      />
      <Button>Add card</Button>
    </form>
  );
};

export default CardForm;
