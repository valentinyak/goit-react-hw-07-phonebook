import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contacts-reducer';
import filterReducer from './filter/filter-reducer';

const mainReducer = combineReducers({
  items: contactsReducer,
  filter: filterReducer,
});
const rootReducer = combineReducers({
  contacts: mainReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
