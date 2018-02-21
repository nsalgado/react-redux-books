import React from 'react';
import { connect } from 'react-redux';


class BookDetail extends React.Component {
  
  constructor (props) {
    super(props);
  }
  
  render () {
    if (!this.props.activeBook) {
      return (
        <div className="book_detail_container"> 
          <h3>Please Select a Book.</h3>
        </div>
      )
    }

    return (
      <div className="book_detail_container"> 
        <h3>Book Details:</h3>
        <h5>Title: {this.props.activeBook.title}</h5> 
        <span>Pages: {this.props.activeBook.pages}</span>
      </div>
    )
  }
}


function mapStateToProps (state) {
  return {
    'activeBook': state.activeBook
  }
}


export default connect(mapStateToProps)(BookDetail)