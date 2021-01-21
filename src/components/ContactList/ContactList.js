import React, { useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import ContactItem from './ContactItem/ContactItem';
import * as contactsActions from '../../redux/contacts/contacts-operations';
import store from '../../redux/store';
import * as contactsOperations from '../../redux/contacts/contacts-operations';

function ContactList({ contacts, onDelete }) {
  const dispatch = useDispatch();

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  const handleDelete = e => {
    const contactId = store
      .getState()
      .contacts.items.items.find(({ id }) => id === e.target.id);

    onDelete(contactId);
  };

  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            <ContactItem contact={contact} onClick={handleDelete} />
          </li>
        );
      })}
    </ul>
  );
}

const getFilteredContacts = (contacts, filter) =>
  contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase()),
  );

const mapStateToProps = store => ({
  contacts: getFilteredContacts(
    store.contacts.items.items,
    store.contacts.filter,
  ),
});

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(contactsActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  onClick: PropTypes.func,
};
