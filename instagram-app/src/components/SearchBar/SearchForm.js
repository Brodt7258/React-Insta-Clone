import React from 'react';
import styled from 'styled-components/macro';

const SearchInput = styled.input`
  text-align: center;
  border: 1px solid #CCC;
  border-radius: 5px;
  padding: 0.5em;
`;

const SearchForm = () => {
  return (
    <form action="">
      <SearchInput 
        type="text"
        placeholder="Search"
      />
    </form>
  );
};

export default SearchForm;