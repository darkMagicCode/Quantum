import { CircularProgress, Box } from '@mui/material';
import type { LoadingSpinnerProps } from './types';

export const LoadingSpinner = ({ size = 40, fullScreen = false }: LoadingSpinnerProps) => {
  const spinner = (
    <CircularProgress
      size={size}
      sx={{
        color: '#6BDEA0',
      }}
    />
  );

  if (fullScreen) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        {spinner}
      </Box>
    );
  }

  return (
    <Box display="flex" justifyContent="center" alignItems="center" p={3}>
      {spinner}
    </Box>
  );
};

