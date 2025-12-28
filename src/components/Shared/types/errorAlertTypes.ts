export interface ErrorAlertProps {
  message: string | null;
  onClose?: () => void;
  severity?: 'error' | 'warning' | 'info' | 'success';
  title?: string;
}

