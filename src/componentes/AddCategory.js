import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setinputValue] = useState('');
  const inputChange = (e) => {
    setinputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue.trim().length);
    if (inputValue.trim().length > 2) {
      setCategories((cats) => [...cats, inputValue]);
      setinputValue('');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={inputValue} onChange={inputChange}></input>
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};