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
    <Dialog open={isOpen} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle>
        <Box display="flex" alignItems="center">
          <Avatar
            src={selectedUser.picture.large}
            alt={fullName}
            sx={{ width: 64, height: 64, mr: 2 }}
          />
          <Box>
            <Typography variant="h5">{fullName}</Typography>
            <Typography variant="body2" color="text.secondary">
              {selectedUser.email}
            </Typography>
          </Box>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Divider sx={{ my: 2 }} />
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
            },
            gap: 2,
          }}
        >
          <Box sx={{ gridColumn: { xs: '1', sm: '1 / -1' } }}>
            <Typography variant="subtitle2" color="text.secondary">
              Phone Number
            </Typography>
            <Typography variant="body1">{selectedUser.phone}</Typography>
          </Box>
          <Box sx={{ gridColumn: { xs: '1', sm: '1 / -1' } }}>
            <Typography variant="subtitle2" color="text.secondary">
              Full Address
            </Typography>
            <Typography variant="body1">{address}</Typography>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="contained">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

