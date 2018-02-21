import { combineReducers } from 'redux';
import BooksReducer from './reducer_book';
import ActiveBookReducer from './reducer_active_book';

// reducers map
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBookReducer
});

export default rootReducer;