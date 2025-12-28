import { useAppSelector, useAppDispatch } from '../../../redux/store';
import { selectUsersLoading, selectUsersError } from '../../../redux/features/users';
import { selectPaginatedUsers } from '../../../redux/features/ui';
import { openModal } from '../../../redux/features/ui';
import { LoadingSpinner } from '../../../components/Shared/LoadingSpinner';
import { ErrorAlert } from '../../../components/Shared/ErrorAlert';
import { GenericTable } from '../../../components/Shared/table';
import { userTableColumns } from './userTableColumns';
import type { User } from '../../../types';

export const UserList = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectPaginatedUsers);
  const loading = useAppSelector(selectUsersLoading);
  const error = useAppSelector(selectUsersError);

  const handleViewDetails = (user: User) => {
    dispatch(openModal(user));
  };

  if (loading) {
    return <LoadingSpinner fullScreen />;
  }

  if (error) {
    return <ErrorAlert message={error} />;
  }

  return (
    <GenericTable
      columns={userTableColumns(handleViewDetails)}
      data={users}
      getRowId={(user) => user.login.uuid}
      emptyMessage="No users found"
      emptyMessageSubtext="Try adjusting your search query"
    />
  );
};

