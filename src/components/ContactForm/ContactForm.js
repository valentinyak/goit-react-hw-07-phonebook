import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { connect, useSelector } from 'react-redux';

import * as contactsActions from '../../redux/contacts/contacts-operations';
import { getAllContacts } from '../../redux/contacts/contacts-selectors';
import './ContactForm.module.css';

function ContactForm({ addContact }) {
  const state = useSelector(state => state);
  const handleSubmit = e => {
    e.preventDefault();

    const { nameInput, phoneInput } = e.target.form;
    const isContactExist = getAllContacts(state).find(
      contact => contact.name === nameInput.value,
    );

    if (isContactExist) {
      alert(`${nameInput.value} is already in contacts`);
      return;
    }

    addContact({
      id: shortid.generate(),
      name: nameInput.value,
      number: phoneInput.value,
    });

    nameInput.value = '';
    phoneInput.value = '';
  };

  return (
    <form>
      <label>
        Insert contact name
        <input type="text" name="nameInput" />
      </label>

      <label>
        Insert contact number
        <input type="text" name="phoneInput" />
      </label>

      <button type="submit" onClick={handleSubmit}>
        Add contact
      </button>
    </form>
  );
}

const mapDispatchToProps = dispatch => ({
  addContact: contact => dispatch(contactsActions.addContact(contact)),
});

export default connect(null, mapDispatchToProps)(ContactForm);

ContactForm.propTypes = {
  addContact: PropTypes.func,
};
