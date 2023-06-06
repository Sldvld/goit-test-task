import { createSlice } from '@reduxjs/toolkit';
import { USERS_LIMIT } from 'refs/refs';
import { firstFetch, fetchMore, putUsers } from './users-operations';

const usersInitialState = {
  items: [],
  isLoading: false,
  error: false,
  loadMore: false,
  page: 1,
};

const usersSlice = createSlice({
  name: 'users',
  initialState: usersInitialState,
  reducers: {
    incrementPage: state => {
      state.page += 1;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(firstFetch.pending, state => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(firstFetch.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
        state.loadMore = action.payload.length < USERS_LIMIT ? false : true;
      })
      .addCase(firstFetch.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(fetchMore.pending, (state, action) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchMore.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(...action.payload);
        state.loadMore = action.payload.length < USERS_LIMIT ? false : true;
      })
      .addCase(fetchMore.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(putUsers.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          user => user.id === action.payload.id
        );
        state.items.splice(index, 1, action.payload);
      });
  },
});

export const { incrementPage } = usersSlice.actions;

export const usersReducer = usersSlice.reducer;
