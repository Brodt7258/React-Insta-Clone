import React from 'react';
import PropTypes from 'prop-types';

import SearchList from './SearchList';
import PostList from './PostList';

const ContentList = ({ searchText, posts, searchResults, handleAddComment, handleAddLike }) => {
  return searchText.length
  ? <SearchList {...{searchResults, handleAddComment, handleAddLike}} />
  : <PostList {...{posts, handleAddComment, handleAddLike}} />
};

ContentList.propTypes = {
  searchText: PropTypes.string.isRequired,
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  searchResults: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleAddComment: PropTypes.func.isRequired,
  handleAddLike: PropTypes.func.isRequired
};

export default ContentList;
