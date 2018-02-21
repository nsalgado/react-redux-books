import React from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux';


class BookList extends React.Component {
  constructor (props) {
    super(props);
  }

  renderList () {
    return this.props.books.map((book, index) => {
      return (
        <li 
          className="book_list__item"
          key={index}
          onClick={ () => this.props.selectBook(book) }
        >
          { book.title }
        </li>
      )
    })
  }

  render () {
    return (
      <div className="book_list_container">
        <ul className="book_list">
          {this.renderList()}
        </ul>
      </div>
    )
  }
}

// connects reducer data with props data in component
function mapStateToProps (state) {
  return {
    'books': state.books
  }
}

// handle events with reducers actions
function mapDispatchToProps (dispatch) {
  return bindActionCreators({'selectBook': selectBook}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(BookList);