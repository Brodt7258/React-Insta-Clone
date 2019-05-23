import React from 'react';
import PropTypes from 'prop-types';

const Post = () => {
  return (
    <div>
      Post
    </div>
  );
};

Post.propTypes = {
  id: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  thumbnailUrl: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  timestamp: PropTypes.string.isRequired,
};

export default Post;
