import React from 'react';

import SearchList from './SearchList';
import PostList from './PostList';

const ContentList = ({ searchText, posts, searchResults, handleAddComment }) => {
  return searchText.length
  ? <SearchList {...{searchResults, handleAddComment}} />
  : <PostList {...{posts, handleAddComment}} />
};

export default ContentList;
