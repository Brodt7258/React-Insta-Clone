import React from 'react';

import PostContainer from './PostContainer';
import withEither from '../../utils/withEither';

const SearchList = withEither(
  props => !props.searchResults.length,
  () => <div>No Results</div>
)((props) => props.searchResults.map(e => {
    return (
      <PostContainer
        {...e}
        key={e.id}
        handleAddComment={props.handleAddComment}
      />
    );
  })
);

export default SearchList;