import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const PostHeading = styled.div`
  display: flex;
  align-items: center;
  padding: 1em;

  img {
    border-radius: 100%;
    height: 3em;
    margin-right: 1em;
  }
`;

const Content = styled.img`
  width: 100%;
  object-fit: cover;
`;

const Post = ({ username, thumbnailUrl, imageUrl }) => {
  return (
    <div>
      <PostHeading>
        <img src={thumbnailUrl} alt={`${username}'s profile`} />
        <h3>{username}</h3>
      </PostHeading>
      <Content src={imageUrl} alt={`${username}'s post`} />
    </div>
  );
};

Post.propTypes = {
  id: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  thumbnailUrl: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default Post;
