import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://647860e9362560649a2da5eb.mockapi.io';

export const fetchUsers = createAsyncThunk('/users', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/users');
    console.log(response.data);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const putUsers = createAsyncThunk(
  'contacts/put',
  async (id, thunkAPI) => {
    try {
      const response = await axios.put(`/users/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
