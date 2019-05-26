import React from 'react';
import styled from 'styled-components/macro';

const NoContentDislay = styled.h3`
  margin: 4em auto;
  text-align: center;
  width: 50%;
`;

const NoContent = ({ text }) => {
  return (
    <NoContentDislay>{text}</NoContentDislay>
  );
}

export default NoContent;