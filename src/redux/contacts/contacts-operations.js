import * as contactsAPI from '../services/contacts-api';
import * as contactsActions from './contacts-actions';

export const fetchContacts = () => async dispatch => {
  dispatch(contactsActions.fetchContactsRequest());

  try {
    const contacts = await contactsAPI.getContacts();

    dispatch(contactsActions.fetchContactsSuccess(contacts));
  } catch (error) {
    dispatch(contactsActions.fetchContactsError(error));
  }
};

export const addContact = contact => async dispatch => {
  dispatch(contactsActions.addContactsRequest());

  try {
    contactsAPI.addContactToDB(contact);
    dispatch(contactsActions.addContactsSuccess(contact));
  } catch (error) {
    dispatch(contactsActions.addContactsError(error));
  }
};

export const deleteContact = contact => async dispatch => {
  dispatch(contactsActions.deleteContactsRequest());

  try {
    contactsAPI.deleteContactFromDB(contact);
    dispatch(contactsActions.deleteContactsSuccess(contact));
  } catch (error) {
    dispatch(contactsActions.deleteContactsError(error));
  }
};
