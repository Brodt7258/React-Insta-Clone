import React from 'react';

import PostContainer from './PostContainer';
import SearchList from './SearchList';

const ContentList = ({ searchText, posts, searchResults, handleAddComment }) => {
  return searchText.length
  ? <SearchList {...{searchResults, handleAddComment}} />
  : posts.map(e => (
    <PostContainer
      {...e}
      key={e.id}
      handleAddComment={handleAddComment}
    />
  ));
};

export default ContentList;

// searchResults.map(e => (
//     <PostContainer
//       {...e}
//       key={e.id}
//       handleAddComment={handleAddComment(e.id)}
//     />
//   ))