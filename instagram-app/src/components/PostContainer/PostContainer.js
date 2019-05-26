import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import Post from './Post';
import CommentSection from '../CommentSection/CommentSection';

const Container = styled.section`
  width: 50%;
  min-width: 550px;
  max-width: 800px;
  margin: 2em auto;
  border: 4px solid white;
  box-shadow: 0px 12px 15px rgba(0, 0, 0, 0.05);
  background-color: white;
`;

const PostContainer = ({ comments, likes, timestamp, handleAddComment, id, ...post }) => {
  return (
    <Container>
      <Post {...post} id={id} />
      <CommentSection {...{ comments, likes, timestamp, handleAddComment, id }} />
    </Container>
  );
};

PostContainer.propTypes = {
  id: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  thumbnailUrl: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  timestamp: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleAddComment: PropTypes.func
};

export default PostContainer;
