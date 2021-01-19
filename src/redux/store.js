import { combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import contactsReducer from './contacts/contacts-reducer';
import filterReducer from './filter/filter-reducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const rootPersistConfig = {
  key: 'phonebook',
  storage,
  blacklist: ['contacts'],
};
const contactsPersistConfig = {
  key: 'contacts',
  storage: storage,
  blacklist: ['filter'],
};

const mainReducer = combineReducers({
  items: contactsReducer,
  filter: filterReducer,
});
const rootReducer = combineReducers({
  contacts: persistReducer(contactsPersistConfig, mainReducer),
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware,
});
const persistor = persistStore(store);

export { store, persistor };
