import type { RootState, User } from '../../../types';

export const selectAllUsers = (state: RootState): User[] => state.users.users;

export const selectUsersLoading = (state: RootState): boolean => state.users.loading;

export const selectUsersError = (state: RootState): string | null => state.users.error;

export const selectUserById = (state: RootState, userId: string): User | undefined => {
  return state.users.users.find((user) => user.login.uuid === userId);
};

