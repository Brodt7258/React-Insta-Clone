import React from 'react';

import PostContainer from './PostContainer';
import withEither from '../../utils/withEither';
import NoContent from './NoContent';

const SearchList = withEither(
  props => !props.searchResults.length,
  () => <NoContent text="No posts matched your search" />
)((props) => props.searchResults.map(e => {
    return (
      <PostContainer
        {...e}
        key={e.id}
        handleAddComment={props.handleAddComment}
        handleAddLike={props.handleAddLike}
      />
    );
  })
);

export default SearchList;