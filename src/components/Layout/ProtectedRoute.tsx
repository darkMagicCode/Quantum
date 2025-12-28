import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/store';
import type { ProtectedRouteProps } from './types';

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

