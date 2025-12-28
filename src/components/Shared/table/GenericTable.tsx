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
        <Typography variant="h6" color="text.secondary">
          {emptyMessage}
        </Typography>
        {emptyMessageSubtext && (
          <Typography variant="body2" color="text.secondary" mt={1}>
            {emptyMessageSubtext}
          </Typography>
        )}
      </Box>
    );
  }

  return (
    <TableContainer component={Paper} elevation={elevation} sx={sx}>
      <Table sx={{ minWidth: 650 }} aria-label="table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                align={column.align}
                style={{ minWidth: column.minWidth }}
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
                    backgroundColor: onRowClick ? 'action.hover' : 'transparent',
                  },
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
                    <TableCell key={column.id} align={column.align}>
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

