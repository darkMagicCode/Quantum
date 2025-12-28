import { TextField, Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { setSearchQuery } from '../../redux/features/ui';
import { debounceString } from '../../utils/helpers';
import { useCallback, useState, useEffect } from 'react';

export const SearchBar = () => {
  const dispatch = useAppDispatch();
  const searchQuery = useAppSelector((state) => state.ui.searchQuery);
  const [localValue, setLocalValue] = useState(searchQuery);

  useEffect(() => {
    setLocalValue(searchQuery);
  }, [searchQuery]);

  const debouncedSearch = useCallback(
    debounceString((value: string) => {
      dispatch(setSearchQuery(value));
    }, 300),
    [dispatch]
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setLocalValue(value);
    debouncedSearch(value);
  };

  return (
    <Box mb={3}>
      <TextField
        fullWidth
        label="Search users by name"
        placeholder="Enter name to search..."
        variant="outlined"
        value={localValue}
        onChange={handleChange}
        sx={{
          maxWidth: { xs: '100%', sm: 600 },
          '& .MuiOutlinedInput-root': {
            '& input': {
              color: '#FFFFFF',
            },
          },
        }}
      />
    </Box>
  );
};

