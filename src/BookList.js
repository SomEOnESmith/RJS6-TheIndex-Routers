import React, { Component } from "react";
import BookTable from "./BookTable";
import SearchBar from "./SearchBar";

class BookList extends Component {
  state = {
    filteredBooks: this.props.books
  };

  filterBooks = query => {
    query = query.toLowerCase();
    let filteredBooks = this.props.books.filter(book =>
      `${book.title}`.toLowerCase().includes(query)
    );
    this.setState({ filteredBooks: filteredBooks });
  };

  filterBooksByColor = color => {
    let filteredBooks = this.props.books.filter(book => book.color === color);
    this.setState({ filteredBooks: filteredBooks });
  };

  render() {
    return (
      <div>
        <h3>Books</h3>
        <SearchBar onChange={this.filterBooks} />
        <div className="row">
          <BookTable
            books={this.state.filteredBooks}
            filterBooksByColor={this.filterBooksByColor}
          />
        </div>
      </div>
    );
  }
}
export default BookList;
