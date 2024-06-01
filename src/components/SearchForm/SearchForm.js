import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { updateSearchString } from '../../redux/store';

const SearchForm = () => {
  const dispatch = useDispatch();
  const searchString = useSelector(state => state.searchString);
  const [search, setSearch] = useState(searchString);

  useEffect(() => {
    setSearch(searchString);
  }, [searchString]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSearchString(search));
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput value={search} onChange={e => setSearch(e.target.value)} placeholder="Search…" />
      <Button>
        <span className="fa fa-search" />
      </Button>
    </form>
  );
};

export default SearchForm;
