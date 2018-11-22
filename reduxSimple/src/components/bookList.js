import React, { Component } from 'react';

class BookList extends Component {

  renderBookList = () => {
    const { books } = this.props;
    const bookList =  books.map(book => {
      return <li onClick={() => this.props.activeBook(book)} key={book.title} className="list-group-item">{book.title}</li>
    });

    return bookList;
  };

  render() {
    return (
      <ul className="col-md-4 list-group">
        {this.renderBookList()}
      </ul>
    );
  }
}

export default BookList;