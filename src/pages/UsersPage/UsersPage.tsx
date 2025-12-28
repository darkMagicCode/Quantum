import { Container, Typography, Box } from '@mui/material';
import { SearchBar } from '../../components/Shared/SearchBar';
import { UserList } from './table';
import { Pagination } from '../../components/Shared/Pagination';
import { UserModal } from './modals';
import { useUsers } from './hooks';

export const UsersPage = () => {
  useUsers();

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Users
      </Typography>
      <Box mt={4}>
        <SearchBar />
        <UserList />
        <Pagination />
      </Box>
      <UserModal />
    </Container>
  );
};

