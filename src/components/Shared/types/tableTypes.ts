import type { SxProps, Theme } from '@mui/material';

export interface Column<T> {
  id: string;
  label: string;
  minWidth?: number;
  align?: 'right' | 'left' | 'center';
  format?: (value: unknown, row: T) => React.ReactNode;
  render?: (row: T) => React.ReactNode;
}

export interface GenericTableProps<T> {
  columns: Column<T>[];
  data: T[];
  onRowClick?: (row: T) => void;
  getRowId: (row: T) => string | number;
  emptyMessage?: string;
  emptyMessageSubtext?: string;
  elevation?: number;
  sx?: SxProps<Theme>;
}

