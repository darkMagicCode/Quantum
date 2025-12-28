import { createAsyncThunk } from '@reduxjs/toolkit';

interface UpdateProfilePayload {
  name: string;
  phone: string;
  jobTitle: string;
  yearsOfExperience: number;
  address: string;
  workingHours: string;
}

export const updateProfile = createAsyncThunk<
  UpdateProfilePayload,
  UpdateProfilePayload,
  { rejectValue: string }
>('profile/updateProfile', async (profileData, { rejectWithValue }) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return profileData;
  } catch (error) {
    return rejectWithValue(
      error instanceof Error ? error.message : 'Failed to update profile'
    );
  }
});

