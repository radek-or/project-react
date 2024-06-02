import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/columnsRedux';
import styles from './ColumnForm.module.scss';
import Button from '../Button/Button';

const ColumnForm = ({ listId }) => {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addColumn({ title, icon, listId }));
    setTitle('');
    setIcon('');
  };

  return (
    <form className={styles.columnForm} onSubmit={handleSubmit}>
      <div className={styles.formField}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className={styles.formField}>
        <label htmlFor="icon">Icon</label>
        <input
          id="icon"
          type="text"
          placeholder="Icon"
          value={icon}
          onChange={(e) => setIcon(e.target.value)}
        />
      </div>
      <div className={styles.buttonWrapper}>
        <Button>Add column</Button>
      </div>
    </form>
  );
};

export default ColumnForm;
