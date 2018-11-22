import React, { Component } from 'react';
import BookList from '../containers/bookListContainer';
import BookDetails from '../containers/bookDetailsContainer';

class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetails />
      </div>
    );
  }
}

export default App;