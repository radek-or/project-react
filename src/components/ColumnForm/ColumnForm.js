import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/store';
import styles from './ColumnForm.module.scss';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

const ColumnForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addColumn({ title, icon }));
    setTitle('');
    setIcon('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.columnForm}>
      <div className={styles.formField}>
        <label>Title:</label>
        <TextInput value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter column title" />
      </div>
      <div className={styles.formField}>
        <label>Icon:</label>
        <TextInput value={icon} onChange={(e) => setIcon(e.target.value)} placeholder="Enter column icon" />
      </div>
      <Button>Add column</Button>
    </form>
  );
};

export default ColumnForm;
