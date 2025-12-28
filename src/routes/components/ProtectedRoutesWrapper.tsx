import { Outlet } from 'react-router-dom';
import { ProtectedRoute } from '../../components/Layout/ProtectedRoute';

export const ProtectedRoutesWrapper = () => (
  <ProtectedRoute>
    <Outlet />
  </ProtectedRoute>
);

