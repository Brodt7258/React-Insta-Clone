import React from 'react';
import styled from 'styled-components/macro';

const CommentInput = styled.input`
  width: 100%;
  border: none;
  border-top: 1px solid #CCC;
  outline: none;
  padding: 0.75em 0;
  font-size: 1.05em;
`;

const CommentForm = () => {
  return (
    <form action="">
      <CommentInput
        type="text"
        placeholder="Add a comment..."
      />
    </form>
  );
};

export default CommentForm;