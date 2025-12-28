import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
} from '@mui/material';
import type { GenericTableProps } from '../types';

export function GenericTable<T>({
  columns,
  data,
  onRowClick,
  getRowId,
  emptyMessage = 'No data found',
  emptyMessageSubtext,
  elevation = 2,
  sx,
}: GenericTableProps<T>) {
  if (data.length === 0) {
    return (
      <Box textAlign="center" py={8}>
        <Typography
          variant="h6"
          sx={{
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: { xs: '1rem', sm: '1.25rem' },
          }}
        >
          {emptyMessage}
        </Typography>
        {emptyMessageSubtext && (
          <Typography
            variant="body2"
            sx={{
              color: 'rgba(255, 255, 255, 0.5)',
              mt: 1,
              fontSize: { xs: '0.875rem', sm: '1rem' },
            }}
          >
            {emptyMessageSubtext}
          </Typography>
        )}
      </Box>
    );
  }

  return (
    <TableContainer
      component={Paper}
      elevation={elevation}
      sx={{
        ...sx,
        overflowX: 'auto',
        '&::-webkit-scrollbar': {
          height: 8,
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(107, 222, 160, 0.3)',
          borderRadius: 4,
          '&:hover': {
            backgroundColor: 'rgba(107, 222, 160, 0.5)',
          },
        },
      }}
    >
      <Table
        sx={{
          minWidth: { xs: 600, sm: 650 },
          '& .MuiTableCell-root': {
            color: '#FFFFFF',
            borderColor: 'rgba(107, 222, 160, 0.1)',
            fontSize: { xs: '0.875rem', sm: '1rem' },
            py: { xs: 1, sm: 1.5 },
          },
        }}
        aria-label="table"
      >
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                align={column.align}
                sx={{
                  minWidth: column.minWidth,
                  fontWeight: 600,
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => {
            const rowId = getRowId(row);
            return (
              <TableRow
                key={rowId}
                hover
                sx={{
                  cursor: onRowClick ? 'pointer' : 'default',
                  '&:hover': {
                    backgroundColor: onRowClick
                      ? 'rgba(107, 222, 160, 0.1)'
                      : 'transparent',
                  },
                  transition: 'background-color 0.2s ease',
                }}
                onClick={() => onRowClick?.(row)}
              >
                {columns.map((column) => {
                  let cellContent: React.ReactNode;

                  if (column.render) {
                    cellContent = column.render(row);
                  } else if (column.format) {
                    const value = (row as Record<string, unknown>)[column.id];
                    cellContent = column.format(value, row);
                  } else {
                    const value = (row as Record<string, unknown>)[column.id];
                    cellContent = value as React.ReactNode;
                  }

                  return (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      sx={{
                        wordBreak: { xs: 'break-word', sm: 'normal' },
                      }}
                    >
                      {cellContent}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

