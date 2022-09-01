/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import { useState } from 'react';
// import "./SearchBar.css";

export default function SearchBar({ placeholder, posts }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState('');
  const [newList, setNewList] = [];

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = posts.filter((value) => {
      return value.caption.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === '') {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  // render posts whose captions === filteredData
  // if posts.caption === filteredData {
  // setNewList(filteredData);

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // filter through filteredData to check if wordEntered is in it
    // if so, render posts with that
    if (posts.caption === filteredData) {
      setNewList(filteredData);
    }
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter} />
        <div>
          {filteredData.length === 0 ? (
            <button onClick={handleSubmit}>Save Search</button>
          ) : (
            <button id="clearBtn" onClick={clearInput} title="clear" />
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.map((value, key) => {
            return (
              <a className="dataItem" key={key.caption} target="_blank">
                <p>{value.caption} </p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
