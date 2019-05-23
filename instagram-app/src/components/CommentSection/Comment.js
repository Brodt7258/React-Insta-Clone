import React from 'react';
import PropTypes from 'prop-types';

const Comment = () => {
  return (
    <div>
      Comment
    </div>
  );
};

Comment.propTypes = {
  id: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Comment;