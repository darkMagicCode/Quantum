import { Controller } from 'react-hook-form';
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Paper,
  Alert,
} from '@mui/material';
import { useLogin } from './hooks';

export const LoginPage = () => {
  const { form, onSubmit, loading, error } = useLogin();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = form;

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: { xs: 2, sm: 3 },
        py: { xs: 4, sm: 6 },
      }}
    >
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, sm: 4 },
              width: '100%',
              backdropFilter: 'blur(10px)',
            }}
          >
            <Typography
              component="h1"
              variant="h4"
              align="center"
              mb={1}
              sx={{
                fontWeight: 700,
                background: 'linear-gradient(135deg, #6BDEA0 0%, #FFFFFF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Welcome Back
            </Typography>
            <Typography
              variant="body2"
              align="center"
              mb={4}
              sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
            >
              Sign in to continue
            </Typography>

            {error && (
              <Alert
                severity="error"
                sx={{
                  mb: 3,
                  borderRadius: 2,
                  backgroundColor: 'rgba(211, 47, 47, 0.1)',
                  color: '#ff6b6b',
                }}
              >
                {error}
              </Alert>
            )}

            <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    autoComplete="email"
                    autoFocus
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    placeholder="Enter your email"
                    sx={{ mb: 2 }}
                  />
                )}
              />
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    margin="normal"
                    required
                    fullWidth
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    error={!!errors.password}
                    helperText={errors.password?.message}
                    placeholder="Enter your password"
                    sx={{ mb: 1 }}
                  />
                )}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 600,
                }}
                disabled={loading}
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </Button>
              <Typography
                variant="body2"
                align="center"
                mt={2}
                sx={{
                  color: 'rgba(255, 255, 255, 0.6)',
                  fontSize: '0.875rem',
                }}
              >
                Use: q@quantum.io / qTask123#
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

