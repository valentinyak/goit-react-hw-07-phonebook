import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as contactsActions from './contacts-actions';

const items = createReducer([], {
  [contactsActions.fetchContactsSuccess]: (_, action) => action.payload,
  [contactsActions.addContactsSuccess]: (state, action) => [
    ...state,
    action.payload,
  ],
  [contactsActions.deleteContactsSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload.id),
});
const isLoading = createReducer(false, {
  [contactsActions.fetchContactsRequest]: () => true,
  [contactsActions.fetchContactsSuccess]: () => false,
  [contactsActions.fetchContactsError]: () => false,

  [contactsActions.addContactsRequest]: () => true,
  [contactsActions.addContactsSuccess]: () => false,
  [contactsActions.addContactsError]: () => false,

  [contactsActions.deleteContactsRequest]: () => true,
  [contactsActions.deleteContactsSuccess]: () => false,
  [contactsActions.deleteContactsError]: () => false,
});
const error = createReducer(null, {
  [contactsActions.fetchContactsError]: (_, action) => action.payload,
  [contactsActions.fetchContactsRequest]: () => null,
  [contactsActions.fetchContactsSuccess]: () => null,

  [contactsActions.addContactsError]: (_, action) => action.payload,
  [contactsActions.addContactsRequest]: () => null,
  [contactsActions.addContactsSuccess]: () => null,

  [contactsActions.deleteContactsError]: (_, action) => action.payload,
  [contactsActions.deleteContactsRequest]: () => null,
  [contactsActions.deleteContactsSuccess]: () => null,
});

const contactsReducer = combineReducers({
  items,
  isLoading,
  error,
});

export default contactsReducer;
