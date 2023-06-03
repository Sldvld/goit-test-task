import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './users-slice';
// import storage from 'redux-persist/lib/storage';

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
