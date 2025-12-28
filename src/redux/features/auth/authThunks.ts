import { createAsyncThunk } from '@reduxjs/toolkit';
import type { LoginCredentials, LoginResponse } from '../../../types';

const loginUser = async (
  credentials: LoginCredentials
): Promise<LoginResponse> => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  if (
    credentials.email === 'q@quantum.io' &&
    credentials.password === 'qTask123#'
  ) {
    return {
      access: 'fake-token',
      refresh: 'fake-refresh',
    };
  }

  throw new Error('Invalid email or password');
};

export const login = createAsyncThunk<
  LoginResponse,
  LoginCredentials,
  { rejectValue: string }
>('auth/login', async (credentials, { rejectWithValue }) => {
  try {
    const response = await loginUser(credentials);
    return response;
  } catch (error) {
    return rejectWithValue(
      error instanceof Error ? error.message : 'Login failed'
    );
  }
});

