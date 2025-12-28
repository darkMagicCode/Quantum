import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/store';

export const RootRoute = () => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  return <Navigate to={isAuthenticated ? '/users' : '/login'} replace />;
};

