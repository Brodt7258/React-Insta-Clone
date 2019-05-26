import React from 'react';

import PostContainer from './PostContainer';
import withEither from '../../utils/withEither';
import NoContent from './NoContent';

const PostList = withEither(
  props => !props.posts.length,
  () => <NoContent text="There are no posts in your feed" />
)((props) => props.posts.map(e => {
    return (
      <PostContainer
        {...e}
        key={e.id}
        handleAddComment={props.handleAddComment}
      />
    );
  })
);

export default PostList;