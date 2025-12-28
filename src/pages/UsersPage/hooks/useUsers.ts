import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { fetchUsers, selectAllUsers } from '../../../redux/features/users';

export const useUsers = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectAllUsers);
  const loading = useAppSelector((state) => state.users.loading);

  useEffect(() => {
    if (users.length === 0 && !loading) {
      dispatch(fetchUsers());
    }
  }, [dispatch, users.length, loading]);

  return {
    users,
    loading,
  };
};

