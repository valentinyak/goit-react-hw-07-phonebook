import { createAction } from '@reduxjs/toolkit';

// export default function changeFilter(value) {
//   return {
//     type: 'filter/changeFilter',
//     payload: value,
//   };
// }

const changeFilter = createAction('filter/changeFilter');

export default changeFilter;
