export const getAllContacts = state => state.contacts.items.items;
export const getContactById = (state, id) =>
  getAllContacts(state).find(contact => contact.id === id);
