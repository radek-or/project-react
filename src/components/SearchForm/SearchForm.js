import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateSearchString } from '../../redux/searchStringRedux';
import styles from './SearchForm.module.scss';
import Button from '../Button/Button';

const SearchForm = () => {
  const [searchString, setSearchString] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSearchString(searchString));
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <input
        type="text"
        placeholder="Search..."
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
        className={styles.input}
      />
      <Button>Search</Button>
    </form>
  );
};

export default SearchForm;
