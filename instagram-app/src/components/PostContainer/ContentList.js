import React from 'react';
import PropTypes from 'prop-types';

import SearchList from './SearchList';
import PostList from './PostList';

const ContentList = ({ searchText, posts, searchResults, handleAddComment }) => {
  return searchText.length
  ? <SearchList {...{searchResults, handleAddComment}} />
  : <PostList {...{posts, handleAddComment}} />
};

ContentList.propTypes = {
  searchText: PropTypes.string.isRequired,
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  searchResults: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleAddComment: PropTypes.func.isRequired
};

export default ContentList;
