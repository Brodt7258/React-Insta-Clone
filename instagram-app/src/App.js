import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import debounce from 'lodash/debounce';
import Fuse from 'fuse.js';

import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import ContentList from './components/PostContainer/ContentList';
import { insta_key, getStorage, checkStorage, updateStorage } from './utils/localStorage';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #fafafa;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`;

class App extends Component {
  state = {
    posts: [],
    searchText: '',
    debouncedText: '',
    searchResults: [],
  };

  componentDidMount() {
    this.setState({
      posts: checkStorage(insta_key)
      ? getStorage(insta_key)
      : dummyData
    });
  }

  addComment = (postId, commentText) => {
    const newComment = {
      id: `${Date.now()}`,
      username: 'testAccount',
      text: commentText
    };

    this.setState(prevState => {
      const postIndex = prevState.posts.findIndex(e => e.id === postId);
      const newPosts = [ ...prevState.posts ];
      newPosts[postIndex] = { ...prevState.posts[postIndex] }
      newPosts[postIndex].comments = [ ...newPosts[postIndex].comments, newComment ];
      return {
        posts: newPosts
      };
    }, () => {
      updateStorage(insta_key, this.state.posts);
    });
  }

  addLike = (postId) => () => {
    this.setState(prevState => {
      const postIndex = prevState.posts.findIndex(e => e.id === postId);
      const newPosts = [ ...prevState.posts ];
      newPosts[postIndex] = { ...prevState.posts[postIndex] };
      newPosts[postIndex].likes = prevState.posts[postIndex].likes + 1;
      return {
        posts: newPosts
      };
    }, () => {
      updateStorage(insta_key, this.state.posts);
    });
  }

  searchHandler = debounce(() => {
    const { posts, searchText } = this.state;

    if (!searchText) {
      this.setState({ 
        debouncedText: searchText,
        searchResults: []
      });
      return;
    }

    const options = {
      threshold: 0.4,
      keys: [
        'username'
      ]
    };

    const fuse = new Fuse(posts, options);
    this.setState(({ searchText }) => ({
      debouncedText: searchText,
      searchResults: fuse.search(searchText)
    }));
  }, 1000)

  handleSearchText = (e) => {
    this.setState({
      searchText: e.target.value
    }, 
      this.searchHandler()
    );
  }

  render() {
    const { posts, searchText, searchResults, debouncedText } = this.state;
    const { handleSearchText, addComment: handleAddComment, addLike: handleAddLike } = this;
    return (
      <>
        <GlobalStyle />
        <SearchBar searchCtrls={{ searchText, handleSearchText }} />
        <ContentList {...{ posts, searchText: debouncedText, searchResults, handleAddComment, handleAddLike }} />
      </>
    );
  }
};

export default App;
