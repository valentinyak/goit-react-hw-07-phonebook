import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ContactItem from './ContactItem/ContactItem';
import * as contactsActions from '../../redux/contacts/contacts-actions';
import store from '../../redux/store';

function ContactList({ contacts, onDelete }) {
  const handleDelete = e => {
    const contactId = store
      .getState()
      .contacts.items.find(({ id }) => id === e.target.id);

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

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getFilteredContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(contactsActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  onClick: PropTypes.func,
};
