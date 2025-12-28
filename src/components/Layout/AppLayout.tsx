import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector, persistor } from '../../redux/store';
import { logout } from '../../redux/features/auth';
import type { AppLayoutProps } from './types';

export const AppLayout = ({ children }: AppLayoutProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  const handleLogout = async () => {
    dispatch(logout());
    await persistor.purge();
    navigate('/login');
  };

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  if (!isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            User Management Dashboard
          </Typography>
          <Button
            color="inherit"
            onClick={() => handleNavigation('/users')}
            sx={{ mr: 1 }}
            variant={location.pathname === '/users' ? 'outlined' : 'text'}
          >
            Users
          </Button>
          <Button
            color="inherit"
            onClick={() => handleNavigation('/profile')}
            sx={{ mr: 1 }}
            variant={location.pathname === '/profile' ? 'outlined' : 'text'}
          >
            Profile
          </Button>
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth={false} sx={{ mt: 0 }}>
        {children}
      </Container>
    </Box>
  );
};

