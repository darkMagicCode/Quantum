import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { ProfileState } from '../../../types';
import { updateProfile } from './profileThunks';

const initialState: ProfileState = {
  name: '',
  phone: '',
  jobTitle: '',
  yearsOfExperience: 0,
  address: '',
  workingHours: '',
  loading: false,
  success: false,
  error: null,
};

interface UpdateProfilePayload {
  name: string;
  phone: string;
  jobTitle: string;
  yearsOfExperience: number;
  address: string;
  workingHours: string;
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    clearSuccess: (state) => {
      state.success = false;
    },
    clearError: (state) => {
      state.error = null;
    },
    setProfileData: (state, action: PayloadAction<Partial<UpdateProfilePayload>>) => {
      Object.assign(state, action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(updateProfile.fulfilled, (state, action: PayloadAction<UpdateProfilePayload>) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.name = action.payload.name;
        state.phone = action.payload.phone;
        state.jobTitle = action.payload.jobTitle;
        state.yearsOfExperience = action.payload.yearsOfExperience;
        state.address = action.payload.address;
        state.workingHours = action.payload.workingHours;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to update profile';
        state.success = false;
      });
  },
});

export const { clearSuccess, clearError, setProfileData } = profileSlice.actions;
export default profileSlice.reducer;

