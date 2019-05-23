import React from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment';

const CommentSection = ({ comments }) => {
  return (
    <div>
      CommentSection
      {comments.map(e => (
        <Comment {...e} key={e.id} />
      ))}
    </div>
  );
};

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CommentSection;
