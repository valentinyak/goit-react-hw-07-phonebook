import { createAction } from '@reduxjs/toolkit';

// export const addContact = contact => ({
//   type: 'contacts/add',
//   payload: contact,
// });

// export const deleteContact = id => ({
//   type: 'contacts/delete',
//   payload: id,
// });

export const addContact = createAction('contacts/add');
export const deleteContact = createAction('contacts/delete');
