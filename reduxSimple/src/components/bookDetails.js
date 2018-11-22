import React, { Component } from 'react';

class BookDetails extends Component {

  render() {
    const { book } = this.props;
    if(!book) {
      return <div>Nothing selected</div>
    }
    return (
      <div>
        <h3>Details of the Book:</h3>
         <div>{book.title}</div>
        <div>{book.pages}</div>
      </div>
    );
  }
}

export default BookDetails;