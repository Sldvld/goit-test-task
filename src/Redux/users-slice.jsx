import { createSlice } from '@reduxjs/toolkit';

import { fetchUsers, putUsers } from './users-operations';

const usersInitialState = {
  items: [],
  isFollowing: false,
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState: usersInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.isFollowing = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.items = action.payload;
        state.error = null;
        state.isFollowing = false;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isFollowing = false;
        state.error = action.payload;
      })
      .addCase(putUsers.pending, state => {
        state.isFollowing = true;
      })
      .addCase(putUsers.fulfilled, (state, action) => {
        state.items = [action.payload, ...state.items];
        state.isFollowing = false;
        state.error = action.payload;
      });
  },
});

export const usersReducer = usersSlice.reducer;
