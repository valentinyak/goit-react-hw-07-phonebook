import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactItem.module.css';

export default function ContactItem({ contact, onClick }) {
  const { name, number, id } = contact;

  return (
    <span>
      {name}: {number}{' '}
      <button className={s.deletBtn} id={id} onClick={onClick}>
        delete
      </button>
    </span>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.objectOf(PropTypes.string),
  onClick: PropTypes.func,
};
