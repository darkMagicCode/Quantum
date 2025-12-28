import { Pagination as MuiPagination, Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { setCurrentPage } from '../../redux/features/ui';
import { selectCurrentPage, selectTotalPages } from '../../redux/features/ui';

export const Pagination = () => {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector(selectCurrentPage);
  const totalPages = useAppSelector(selectTotalPages);

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(setCurrentPage(value));
  };

  if (totalPages <= 1) {
    return null;
  }

  return (
    <Box display="flex" justifyContent="center" mt={4} mb={2}>
      <MuiPagination
        count={totalPages}
        page={currentPage}
        onChange={handleChange}
        color="primary"
        size="large"
      />
    </Box>
  );
};

