import { Container, Typography, Box } from '@mui/material';
import { SearchBar } from '../../components/Shared/SearchBar';
import { UserList } from './table';
import { Pagination } from '../../components/Shared/Pagination';
import { UserModal } from './modals';
import { useUsers } from './hooks';

export const UsersPage = () => {
  useUsers();

  return (
    <Container
      maxWidth="lg"
      sx={{
        py: { xs: 2, sm: 4 },
        px: { xs: 1, sm: 2 },
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{
          fontWeight: 700,
          mb: { xs: 2, sm: 3 },
          fontSize: { xs: '1.75rem', sm: '2.125rem' },
        }}
      >
        Users
      </Typography>
      <Box mt={{ xs: 2, sm: 4 }}>
        <SearchBar />
        <Box sx={{ mt: { xs: 2, sm: 3 } }}>
          <UserList />
        </Box>
        <Pagination />
      </Box>
      <UserModal />
    </Container>
  );
};

