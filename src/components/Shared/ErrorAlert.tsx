import { Alert, AlertTitle, Snackbar } from '@mui/material';
import { useState, useEffect } from 'react';
import type { ErrorAlertProps } from './types';

export const ErrorAlert = ({
  message,
  onClose,
  severity = 'error',
  title,
}: ErrorAlertProps) => {
  const [open, setOpen] = useState(!!message);

  useEffect(() => {
    setOpen(!!message);
  }, [message]);

  const handleClose = () => {
    setOpen(false);
    if (onClose) {
      onClose();
    }
  };

  if (!message) {
    return null;
  }

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
        {title && <AlertTitle>{title}</AlertTitle>}
        {message}
      </Alert>
    </Snackbar>
  );
};

