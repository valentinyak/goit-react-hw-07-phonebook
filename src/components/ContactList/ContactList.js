import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ContactItem from './ContactItem/ContactItem';
import * as contactsActions from '../../redux/contacts/contacts-actions';
import { store } from '../../redux/store';

function ContactList({ contacts, onDelete }) {
  const handleDelete = e => {
    const contactId = store
      .getState()
      .contacts.items.find(contact => contact.id === e.target.id);

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
  contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

const mapStateToProps = store => ({
  contacts: getFilteredContacts(store.contacts.items, store.contacts.filter),
});

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(contactsActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  onClick: PropTypes.func,
};
