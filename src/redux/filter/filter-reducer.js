import { createReducer } from '@reduxjs/toolkit';
import changeFilter from './filter-actions';

const filterReducer = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default filterReducer;
