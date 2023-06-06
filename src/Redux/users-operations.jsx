import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL, USERS_LIMIT } from 'refs/refs';

axios.defaults.baseURL = BASE_URL;

export const fetchUsers = async (
  { page, isFollowing = null },
  { rejectWithValue }
) => {
  const params = { limit: USERS_LIMIT };
  params.page = page;
  if (isFollowing !== null) {
    params.isFollowing = isFollowing;
  }
  try {
    const response = await axios.get('/users', { params });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
};

export const firstFetch = createAsyncThunk('users/firstFetch', fetchUsers);
export const fetchMore = createAsyncThunk('users/fetchMore', fetchUsers);

export const putUsers = createAsyncThunk(
  'users/toggling',
  async ({ id, isFollowing, followers }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`/users/${id}`, {
        isFollowing,
        followers,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
