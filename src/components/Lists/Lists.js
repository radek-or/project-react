import React from 'react';
import { useSelector } from 'react-redux';
import { getAllLists } from '../../redux/listsRedux';
import { Link } from 'react-router-dom';
import styles from './Lists.module.scss';

const Lists = () => {
  const lists = useSelector(getAllLists);

  return (
    <section className={styles.lists}>
      {lists.map(list => (
        <Link to={`/list/${list.id}`} key={list.id} className={styles.listLink}>
          <h2 className={styles.title}>{list.title}</h2>
          <p className={styles.description}>{list.description}</p>
        </Link>
      ))}
    </section>
  );
};

export default Lists;
