import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { UIState, User } from '../../../types';

const initialState: UIState = {
  searchQuery: '',
  currentPage: 1,
  pageSize: 10,
  isModalOpen: false,
  selectedUser: null,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
      state.currentPage = 1;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setPageSize: (state, action: PayloadAction<number>) => {
      state.pageSize = action.payload;
      state.currentPage = 1;
    },
    openModal: (state, action: PayloadAction<User>) => {
      state.isModalOpen = true;
      state.selectedUser = action.payload;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
      state.selectedUser = null;
    },
    setSelectedUser: (state, action: PayloadAction<User | null>) => {
      state.selectedUser = action.payload;
    },
  },
});

export const {
  setSearchQuery,
  setCurrentPage,
  setPageSize,
  openModal,
  closeModal,
  setSelectedUser,
} = uiSlice.actions;
export default uiSlice.reducer;

