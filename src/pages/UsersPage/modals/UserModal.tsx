import { Typography, Box, Avatar, Divider, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { closeModal, selectSelectedUser } from '../../../redux/features/ui';
import { formatFullName, formatAddress } from '../../../utils/helpers';

export const UserModal = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.ui.isModalOpen);
  const selectedUser = useAppSelector(selectSelectedUser);

  const handleClose = () => {
    dispatch(closeModal());
  };

  if (!selectedUser) {
    return null;
  }

  const fullName = formatFullName(selectedUser.name.first, selectedUser.name.last);
  const address = formatAddress(selectedUser.location);

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 3,
        },
      }}
    >
      <DialogTitle>
        <Box
          display="flex"
          alignItems="center"
          flexDirection={{ xs: 'column', sm: 'row' }}
          gap={{ xs: 2, sm: 0 }}
          textAlign={{ xs: 'center', sm: 'left' }}
        >
          <Avatar
            src={selectedUser.picture.large}
            alt={fullName}
            sx={{
              width: { xs: 80, sm: 64 },
              height: { xs: 80, sm: 64 },
              mr: { xs: 0, sm: 2 },
              border: '3px solid #6BDEA0',
            }}
          />
          <Box>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                fontSize: { xs: '1.25rem', sm: '1.5rem' },
              }}
            >
              {fullName}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: '#6BDEA0',
                mt: 0.5,
                wordBreak: 'break-word',
              }}
            >
              {selectedUser.email}
            </Typography>
          </Box>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Divider sx={{ my: 2, borderColor: 'rgba(107, 222, 160, 0.2)' }} />
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
            <Typography
              variant="subtitle2"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                mb: 0.5,
                fontWeight: 600,
              }}
            >
              Phone Number
            </Typography>
            <Typography variant="body1" sx={{ color: '#FFFFFF' }}>
              {selectedUser.phone}
            </Typography>
          </Box>
          <Box sx={{ gridColumn: { xs: '1', sm: '1 / -1' } }}>
            <Typography
              variant="subtitle2"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                mb: 0.5,
                fontWeight: 600,
              }}
            >
              Full Address
            </Typography>
            <Typography variant="body1" sx={{ color: '#FFFFFF' }}>
              {address}
            </Typography>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 3 }}>
        <Button
          onClick={handleClose}
          variant="contained"
          sx={{
            minWidth: { xs: '100%', sm: 120 },
            py: 1.25,
          }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

