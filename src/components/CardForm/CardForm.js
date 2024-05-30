import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './CardForm.module.scss';
import Button from './../Button/Button';
import TextInput from './../TextInput/TextInput';

const CardForm = ({ columnId }) => {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ 
          type: 'ADD_CARD', 
          payload: { title, columnId } 
        });
        setTitle('');
      };

	return (
        <form className={styles.CardForm} onSubmit={handleSubmit}>
            <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <Button>Add card</Button>
        </form>
	);
};

export default CardForm;