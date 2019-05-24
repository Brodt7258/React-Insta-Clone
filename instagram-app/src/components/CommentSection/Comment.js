import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const CommentContent = styled.p`
  margin: 0.5em 0;
`;

const UserDisplay = styled.span`
  margin-right: 0.5em;
  font-weight: 600;
`;

const Comment = ({ username, text }) => {
  return (
    <CommentContent>
      <UserDisplay>{username}</UserDisplay>
      {text}
    </CommentContent>
  );
};

Comment.propTypes = {
  id: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Comment;