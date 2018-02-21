import React from 'react'
import BookList from '../containers/book-list'
import BookDetail from '../containers/book-detail'

import { createStore } from 'redux';

// Allow all data from store available in all containers
import { Provider } from 'react-redux';
import rootReducer from '../reducers/index'

import '../styles/style.css'

// Store -> one object with all data. Because of that we combine all reducers with combineReducers
const store = createStore(rootReducer)

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <div className="flex">
          <BookList/>
          <BookDetail/>
        </div>
      </Provider>
    )
  }
}
