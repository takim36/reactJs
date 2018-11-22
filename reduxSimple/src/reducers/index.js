import { combineReducers } from 'redux';
import booksReducer from './booksReducer';
import activeBookReducer from './activeBookReducer';

const rootReducer = combineReducers({
  books: booksReducer,
  activeBook: activeBookReducer,
});

export default rootReducer;