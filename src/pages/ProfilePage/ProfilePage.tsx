import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  Snackbar,
  Alert,
  CircularProgress,
} from '@mui/material';
import { Controller } from 'react-hook-form';
import { useAppDispatch } from '../../redux/store';
import { clearSuccess, clearError } from '../../redux/features/profile';
import { useProfile } from './hooks';

export const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const { form, onSubmit, profile } = useProfile();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = form;

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Edit Profile
      </Typography>

      <Paper elevation={3} sx={{ p: 4 }}>
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
              },
              gap: 3,
            }}
          >
            <Box sx={{ gridColumn: { xs: '1', sm: '1 / -1' } }}>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    required
                    label="Name"
                    error={!!errors.name}
                    helperText={errors.name?.message}
                    placeholder="Enter your full name"
                  />
                )}
              />
            </Box>

            <Box>
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    required
                    label="Phone"
                    error={!!errors.phone}
                    helperText={errors.phone?.message}
                    placeholder="Enter your phone number"
                  />
                )}
              />
            </Box>

            <Box>
              <Controller
                name="jobTitle"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    required
                    label="Job Title"
                    error={!!errors.jobTitle}
                    helperText={errors.jobTitle?.message}
                    placeholder="Enter your job title"
                  />
                )}
              />
            </Box>

            <Box>
              <Controller
                name="yearsOfExperience"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    required
                    type="number"
                    label="Years of Experience"
                    error={!!errors.yearsOfExperience}
                    helperText={errors.yearsOfExperience?.message}
                    placeholder="Enter years of experience"
                    inputProps={{ min: 0 }}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                )}
              />
            </Box>

            <Box>
              <Controller
                name="workingHours"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    required
                    label="Working Hours"
                    error={!!errors.workingHours}
                    helperText={errors.workingHours?.message}
                    placeholder="e.g., 9:00 AM - 5:00 PM"
                  />
                )}
              />
            </Box>

            <Box sx={{ gridColumn: { xs: '1', sm: '1 / -1' } }}>
              <Controller
                name="address"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    required
                    multiline
                    rows={3}
                    label="Address"
                    error={!!errors.address}
                    helperText={errors.address?.message}
                    placeholder="Enter your address"
                  />
                )}
              />
            </Box>

            <Box sx={{ gridColumn: { xs: '1', sm: '1 / -1' } }}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                disabled={profile.loading}
                sx={{ mt: 2 }}
              >
                {profile.loading ? (
                  <>
                    <CircularProgress size={20} sx={{ mr: 1 }} />
                    Saving...
                  </>
                ) : (
                  'Save Profile'
                )}
              </Button>
            </Box>
          </Box>
        </Box>
      </Paper>

      <Snackbar
        open={profile.success}
        autoHideDuration={3000}
        onClose={() => dispatch(clearSuccess())}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={() => dispatch(clearSuccess())} severity="success" sx={{ width: '100%' }}>
          Profile updated successfully!
        </Alert>
      </Snackbar>

      <Snackbar
        open={!!profile.error}
        autoHideDuration={6000}
        onClose={() => dispatch(clearError())}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={() => dispatch(clearError())} severity="error" sx={{ width: '100%' }}>
          {profile.error}
        </Alert>
      </Snackbar>
    </Container>
  );
};

