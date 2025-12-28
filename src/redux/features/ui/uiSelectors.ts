import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../../../types';

export const selectSearchQuery = (state: RootState): string => state.ui.searchQuery;

export const selectCurrentPage = (state: RootState): number => state.ui.currentPage;

export const selectPageSize = (state: RootState): number => state.ui.pageSize;

export const selectIsModalOpen = (state: RootState): boolean => state.ui.isModalOpen;

export const selectSelectedUser = (state: RootState) => state.ui.selectedUser;

export const selectFilteredUsers = createSelector(
  [(state: RootState) => state.users.users, selectSearchQuery],
  (users, searchQuery) => {
    if (!searchQuery.trim()) {
      return users;
    }

    const query = searchQuery.toLowerCase().trim();
    return users.filter((user) => {
      const fullName = `${user.name.first} ${user.name.last}`.toLowerCase();
      return fullName.includes(query);
    });
  }
);

export const selectPaginatedUsers = createSelector(
  [selectFilteredUsers, selectCurrentPage, selectPageSize],
  (filteredUsers, currentPage, pageSize) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return filteredUsers.slice(startIndex, endIndex);
  }
);

export const selectTotalPages = createSelector(
  [selectFilteredUsers, selectPageSize],
  (filteredUsers, pageSize) => {
    return Math.ceil(filteredUsers.length / pageSize) || 1;
  }
);

