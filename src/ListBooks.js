import React, { Component } from 'react';
import Bookshelf from './Bookshelf';

class ListBooks extends Component {

  render() {
    console.log('Props: ', this.props);
    return (
      <div className="list-books">
        <ListBooksHeader />
        <div className="list-books-content">
          <Bookshelf 
            books={this.props.books.filter((book) => (
              book.shelf === 'currentlyReading'
            ))} 
            bookshelfTitle='Currently Reading'
            setBookshelf={this.props.setBookshelf}
          />
          <Bookshelf 
            books={this.props.books.filter((book) => (
              book.shelf === 'wantToRead'
            ))} 
            bookshelfTitle='Want To Read'
            setBookshelf={this.props.setBookshelf}
          />
          <Bookshelf 
            books={this.props.books.filter((book) => (
              book.shelf === 'read'
            ))} 
            bookshelfTitle='Read'
            setBookshelf={this.props.setBookshelf}
          />
        </div>
        <div className="open-search">
          <a onClick={() => this.props.setShowSearchPage(true) }>Add a book</a>
        </div>
      </div>
    );
  }
}

function ListBooksHeader() {
  return (
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
  );
}

export default ListBooks;