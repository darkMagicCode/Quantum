import { Typography, Button } from '@mui/material';
import { Visibility } from '@mui/icons-material';
import type { Column } from '../../../components/Shared/table';
import { formatFullName } from '../../../utils/helpers';
import type { User } from '../../../types';

export const userTableColumns = (
  onViewDetails: (user: User) => void
): Column<User>[] => [
  {
    id: 'name',
    label: 'Full Name',
    render: (user) => {
      const fullName = formatFullName(user.name.first, user.name.last);
      return (
        <Typography variant="body2" fontWeight="medium">
          {fullName}
        </Typography>
      );
    },
  },
  {
    id: 'email',
    label: 'Email',
    render: (user) => <Typography variant="body2">{user.email}</Typography>,
  },
  {
    id: 'location',
    label: 'City and Country',
    render: (user) => (
      <Typography variant="body2">
        {user.location.city} and {user.location.country}
      </Typography>
    ),
  },
  {
    id: 'actions',
    label: 'Actions',
    align: 'right',
    render: (user) => (
      <Button
        variant="outlined"
        size="small"
        startIcon={<Visibility />}
        onClick={(e) => {
          e.stopPropagation();
          onViewDetails(user);
        }}
      >
        View Details
      </Button>
    ),
  },
];

