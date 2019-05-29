import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { Instagram } from 'styled-icons/boxicons-logos';
import { Compass } from 'styled-icons/typicons/Compass';
import { Heart } from 'styled-icons/boxicons-regular/Heart';
import { User } from 'styled-icons/boxicons-regular/User';

import SearchForm from './SearchForm';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  box-shadow: 0px -5px 20px rgba(0, 0, 0, 0.25);
  background-color: white;
`;

const BrandContainer = styled.div`
  display: flex;
  align-items: center;

  h1 {
    line-height: 1;
    padding: 0.2em 1rem;
    border-left: 1px solid black;
  }
`;

const Logo = styled(Instagram)`
  display: block;
  height: 100%;
  width: 3em;
  margin-right: 1rem;
`;

const NavMenu = styled.nav`
  display: flex;
  align-items: center;
`;

const Discover = styled(Compass)`
  width: 2em;
  margin-right: 2em;
`;

const Activity = styled(Heart)`
  width: 2em;
  margin-right: 2em;
`;

const Profile = styled(User)`
  width: 2em;
`;

const SearchBar = ({ searchCtrls }) => {
  return (
    <Header>
      <BrandContainer>
        <Logo />
        <h1>Instagram</h1>
      </BrandContainer>
      <SearchForm {...searchCtrls} />
      <NavMenu>
        <Discover />
        <Activity />
        <Profile />
      </NavMenu>
    </Header>
  );
};

SearchBar.propTypes = {
  searchCtrls: PropTypes.object
};

export default SearchBar;
