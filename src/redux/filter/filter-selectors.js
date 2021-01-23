import { getAllContacts } from '../contacts/contacts-selectors';

export const getFilterValue = state => state.contacts.filter;
export const getFilteredContacts = state => {
  const contacts = getAllContacts(state);
  const filter = getFilterValue(state);

  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase()),
  );
};
