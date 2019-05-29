import React, { useState } from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const CommentInput = styled.input`
  width: 100%;
  border: none;
  border-top: 1px solid #CCC;
  outline: none;
  padding: 1em 0 0.25em;
  font-size: 1.05em;
`;

const CommentForm = ({ handleAddComment, postId }) => {
  const [commentText, setCommentText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    handleAddComment(postId, commentText);
    setCommentText('');
  }

  return (
    <form name="Add Comment" onSubmit={handleSubmit}>
      <CommentInput
        type="text"
        placeholder="Add a comment..."
        value={commentText}
        onChange={e => setCommentText(e.target.value)}
      />
    </form>
  );
};

CommentForm.propTypes = {
  handleAddComment: PropTypes.func.isRequired,
  postId: PropTypes.string.isRequired
};

export default CommentForm;