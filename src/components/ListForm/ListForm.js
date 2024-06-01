import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './ListForm.module.scss';
import Button from './../Button/Button';
import TextInput from './../TextInput/TextInput';
import { addList } from '../../redux/store';

const ListForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addList({ title, description }));
    setTitle('');
    setDescription('');
  };

  return (
    <form className={styles.listForm} onSubmit={handleSubmit}>
      <div className={styles.formField}>
        <label>Title:</label>
        <TextInput value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className={styles.formField}>
        <label>Description:</label>
        <TextInput value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <Button>Add list</Button>
    </form>
  );
};

export default ListForm;
