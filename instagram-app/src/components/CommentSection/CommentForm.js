import React, { useState } from 'react';
import styled from 'styled-components/macro';

const CommentInput = styled.input`
  width: 100%;
  border: none;
  border-top: 1px solid #CCC;
  outline: none;
  padding: 1em 0 0.25em;
  font-size: 1.05em;
`;

const CommentForm = ({ handleAddComment }) => {
  const [commentText, setCommentText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(commentText);
    handleAddComment(commentText);
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <CommentInput
        type="text"
        placeholder="Add a comment..."
        value={commentText}
        onChange={e => setCommentText(e.target.value)}
      />
    </form>
  );
};

export default CommentForm;