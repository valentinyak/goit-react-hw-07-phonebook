import { createReducer } from '@reduxjs/toolkit';
import changeFilter from './filter-actions';

// const filterReducer = (state = '', action) => {
//   switch (action.type) {
//     case 'filter/changeFilter':
//       return action.payload;

//     default:
//       return state;
//   }
// };

const filterReducer = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default filterReducer;
