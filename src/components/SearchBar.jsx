/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import { useState } from 'react';
import styles from './SearchBar.css';
import image from '../../public/trash.png';

// import "./SearchBar.css";

export default function SearchBar({ setFilteredResults, setFilteredData, search, setSearch }) {
  const [query, setQuery] = useState('');
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(query);
    setQuery('');
  };

  const reset = () => {
    setQuery('');
    setFilteredResults([]);
  };

  return (
    <div className="search">
      <div className={styles.SearchBar}>
        <form
          onSubmit={handleSearch}
          className={styles.SearchForm}
          style={{ backgroundImage: `url(${image})` }}
        >
          <h2 style={{ background: 'red' }}>Filter Your Trash</h2>
          <input
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            value={query}
            placeholder="Search Posts"
          />
          <div className={styles.ButtonDiv}>
            <button className={styles.SearchButton}>🔎</button>
            {search.length ? (
              <button onClick={reset} className={styles.SearchButton}>
                ✖️
              </button>
            ) : null}
          </div>
        </form>
      </div>
    </div>
  );
}
