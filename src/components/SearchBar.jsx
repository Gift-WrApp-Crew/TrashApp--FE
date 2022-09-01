/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import { useState } from 'react';
import styles from './SearchBar.css';

// import "./SearchBar.css";

export default function SearchBar({ setFilteredData, search, setSearch }) {
  const handleSearch = (e) => {
    if (search === '') {
      setFilteredData(false);
    } else {
      setFilteredData(true);
    }
    setSearch(e.target.value);
  };
  // dont setSearch until you submit
  // form on submit, setSearch=e.target.value

  return (
    <div className="search">
      <div className={styles.SearchBar}>
        <h2>Filter Your Trash</h2>
        <input onChange={handleSearch} type="search" placeholder="Search Posts" />
        <button>Search!</button>
      </div>
    </div>
  );
}
