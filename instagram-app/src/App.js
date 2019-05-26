import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import debounce from 'lodash/debounce';
import Fuse from 'fuse.js';

import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import ContentList from './components/PostContainer/ContentList';

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
      posts: dummyData
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
      newPosts[postIndex].comments = [ ...newPosts[postIndex].comments, newComment ];
      return {
        posts: newPosts
      };
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
    const { handleSearchText, addComment: handleAddComment } = this;
    return (
      <>
        <GlobalStyle />
        <SearchBar searchCtrls={{ searchText, handleSearchText }} />
        <ContentList {...{ posts, searchText: debouncedText, searchResults, handleAddComment }} />
      </>
    );
  }
};

export default App;
