import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { Heart } from 'styled-icons/boxicons-regular/Heart';
import { MessageRounded } from 'styled-icons/boxicons-regular/MessageRounded';

import Comment from './Comment';
import CommentForm from './CommentForm';

const CommentsContainer = styled.div`
  padding: 0.5em 1em;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 2em;
    margin-right: 0.5em;
  }
`;

const Likes = styled.p`
  font-weight: 600;
  margin: 0.5em 0;
`;

const TimeStamp = styled.p`
  margin: 0.5em 0;
  text-transform: uppercase;
  font-size: 0.9em;
  color: #777;
`;

const CommentSection = ({ comments, likes, timestamp, handleAddComment }) => {
  return (
    <CommentsContainer>
      <Actions>
        <Heart />
        <MessageRounded />
      </Actions>
      <Likes>{likes} likes</Likes>
      {comments.map(e => (
        <Comment {...e} key={e.id} />
      ))}
      <TimeStamp>{timestamp}</TimeStamp>
      <CommentForm handleAddComment={handleAddComment} />
    </CommentsContainer>
  );
};

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  likes: PropTypes.number.isRequired,
  timestamp: PropTypes.string.isRequired,
  handleAddComment: PropTypes.func
};

export default CommentSection;
