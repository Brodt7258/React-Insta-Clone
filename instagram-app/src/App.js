import React from 'react';

import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <div>
      <SearchBar />
      {dummyData.map(e => (
        <PostContainer {...e} key={e.id} />
      ))}
    </div>
  );
}

export default App;
