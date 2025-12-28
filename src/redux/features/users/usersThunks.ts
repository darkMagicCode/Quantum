import { createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '../../../services/apiClient';
import type { User, RandomUserResponse } from '../../../types';

const fetchUsersAPI = async (): Promise<User[]> => {
  const response = await apiClient.get<RandomUserResponse>(
    'https://randomuser.me/api/?results=50'
  );
  return response.data.results;
};

export const fetchUsers = createAsyncThunk<
  User[],
  void,
  { rejectValue: string }
>('users/fetchUsers', async (_, { rejectWithValue }) => {
  try {
    const users = await fetchUsersAPI();
    return users;
  } catch (error) {
    return rejectWithValue(
      error instanceof Error ? error.message : 'Failed to fetch users'
    );
  }
});

