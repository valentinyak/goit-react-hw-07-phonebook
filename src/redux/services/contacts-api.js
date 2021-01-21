import axios from 'axios';

const BASE_URL = 'http://localhost:3004/contacts';

export const getContacts = () => {
  const contacts = axios.get(BASE_URL).then(response => response.data);

  return contacts;
};
export const addContactToDB = contact => {
  axios.post(BASE_URL, contact);
};
export const deleteContactFromDB = contact => {
  axios.delete(`${BASE_URL}/${contact.id}`);
};
