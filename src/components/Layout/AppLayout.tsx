import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
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
    <Box sx={{ flexGrow: 1, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AppBar position="sticky" elevation={0}>
        <Toolbar
          sx={{
            px: { xs: 2, sm: 3 },
            py: 1,
            display: 'flex',
            justifyContent: 'space-between',
            gap: { xs: 1, sm: 2 },
            flexWrap: { xs: 'wrap', sm: 'nowrap' },
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: 700,
              fontSize: { xs: '1.1rem', sm: '1.25rem' },
              background: 'linear-gradient(135deg, #6BDEA0 0%, #FFFFFF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Quantum
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: { xs: 0.5, sm: 1 },
              flexWrap: 'wrap',
              ml: 'auto',
            }}
          >
            <Button
              onClick={() => handleNavigation('/users')}
              sx={{
                color: location.pathname === '/users' ? '#6BDEA0' : 'rgba(255, 255, 255, 0.8)',
                fontWeight: location.pathname === '/users' ? 600 : 400,
                px: { xs: 1.5, sm: 2 },
                py: 1,
                borderRadius: 2,
                '&:hover': {
                  backgroundColor: 'rgba(107, 222, 160, 0.1)',
                  color: '#6BDEA0',
                },
                ...(location.pathname === '/users' && {
                  backgroundColor: 'rgba(107, 222, 160, 0.15)',
                  borderBottom: '2px solid #6BDEA0',
                }),
              }}
            >
              Users
            </Button>
            <Button
              onClick={() => handleNavigation('/profile')}
              sx={{
                color: location.pathname === '/profile' ? '#6BDEA0' : 'rgba(255, 255, 255, 0.8)',
                fontWeight: location.pathname === '/profile' ? 600 : 400,
                px: { xs: 1.5, sm: 2 },
                py: 1,
                borderRadius: 2,
                '&:hover': {
                  backgroundColor: 'rgba(107, 222, 160, 0.1)',
                  color: '#6BDEA0',
                },
                ...(location.pathname === '/profile' && {
                  backgroundColor: 'rgba(107, 222, 160, 0.15)',
                  borderBottom: '2px solid #6BDEA0',
                }),
              }}
            >
              Profile
            </Button>
            <Button
              onClick={handleLogout}
              sx={{
                color: 'rgba(255, 255, 255, 0.8)',
                px: { xs: 1.5, sm: 2 },
                py: 1,
                borderRadius: 2,
                '&:hover': {
                  backgroundColor: 'rgba(107, 222, 160, 0.1)',
                  color: '#6BDEA0',
                },
              }}
            >
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: { xs: 3, sm: 4 },
          px: { xs: 2, sm: 3 },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

