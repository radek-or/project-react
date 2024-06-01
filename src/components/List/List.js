import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Navigate } from 'react-router-dom';
import { getListById, getColumnsByList } from '../../redux/store';
import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import SearchForm from '../SearchForm/SearchForm';

const List = () => {
  const { listId } = useParams();
  const listData = useSelector(state => getListById(state, listId));
  const columns = useSelector(state => getColumnsByList(state, listId));

  if (!listData) {
    return <Navigate to="/" />;
  }

  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>
          {listData.title}<span>soon!</span>
        </h2>
      </header>
      <p className={styles.description}>{listData.description}</p>
      <SearchForm />
      <section className={styles.columns}>
        {columns.map((column) => (
          <Column key={column.id} id={column.id} title={column.title} icon={column.icon} />
        ))}
      </section>
      <ColumnForm listId={listId} />
    </div>
  );
};

export default List;
