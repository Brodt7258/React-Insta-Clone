import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const NoContentDislay = styled.h3`
  margin: 4em auto;
  text-align: center;
  width: 50%;
`;

const NoContent = ({ text }) => {
  return (
    <NoContentDislay>{text}</NoContentDislay>
  );
};

NoContent.propTypes = {
  text: PropTypes.string.isRequired
};

export default NoContent;