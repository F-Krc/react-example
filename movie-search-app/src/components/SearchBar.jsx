import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

 const handleInputChange = (e) => {
   setInputValue(e.target.value);
   onSearch(e.target.value);
 };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Search movies..." value={inputValue} onChange={handleInputChange} />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
