import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const SearchInput = styled.input`
  text-align: center;
  border: 1px solid #CCC;
  border-radius: 5px;
  padding: 0.5em;
`;

const SearchForm = ({ searchText, handleSearchText }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <SearchInput 
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={handleSearchText}
      />
    </form>
  );
};

SearchForm.propTypes = {
  searchText: PropTypes.string.isRequired,
  handleSearchText: PropTypes.func.isRequired
};

export default SearchForm;