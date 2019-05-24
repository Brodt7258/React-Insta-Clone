import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';

import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

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
    posts: []
  };

  componentDidMount() {
    this.setState({
      posts: dummyData
    });
  }

  render() {
    return (
      <>
        <GlobalStyle />
        <SearchBar />
        {this.state.posts && 
          this.state.posts.map(e => (
            <PostContainer {...e} key={e.id} />
          ))
        }
      </>
    );
  }
  
};

export default App;
