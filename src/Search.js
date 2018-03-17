import React, { Component } from 'react';
import Bookshelf from './Bookshelf';
import PropTypes from 'prop-types';
import escapeRegExp from 'escape-string-regexp';
import * as BooksAPI from './BooksAPI'
// import sortBy from 'sort-by';

class Search extends Component {
  state = {
    query: '',
    showingBooks: []
  };

  updateQuery = (query) => {
    this.setState({ query: query });
    this.searchBooks(query)
  }

  searchBooks = (query) => {
    if (this.state.query) {
      // let showingBooks;
      // const match = new RegExp(escapeRegExp(this.state.query), 'i');
      // showingBooks = this.props.books.filter((book) => match.test(book.title));
      BooksAPI.search(this.state.query).then((showingBooks) => {
        this.setState({ showingBooks: showingBooks });

      })
      // console.log('search books', showingBooks);
    } else {
      // showingBooks = this.props.books;
      this.setState({ showingBooks: []});
    }
  }

  render() {
    // console.log('search books', this.state.showingBooks);

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={() => this.props.setShowSearchPage(false)}>Close</a>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input 
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <Bookshelf 
            books={this.state.showingBooks}
            bookshelfTitle='Search'
            setBookshelf={this.props.setBookshelf}
          />
        </div>
      </div>
    );
  }
}


Search.PropTypes = {
  books: PropTypes.array.isRequired,
  setShowSearchPage: PropTypes.func.isRequired
}

export default Search;