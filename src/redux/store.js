import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './contacts/tasksSlice';
import { filtersReducer } from './contacts/filtersSlice';
import { authReducer } from './auth/slice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: tasksReducer,
    filters: filtersReducer,
  },
});

export default store;
