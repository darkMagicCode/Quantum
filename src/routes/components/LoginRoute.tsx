import { Navigate } from 'react-router-dom';
import { LoginPage } from '../../pages/LoginPage';
import { useAppSelector } from '../../redux/store';

export const LoginRoute = () => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  return isAuthenticated ? <Navigate to="/users" replace /> : <LoginPage />;
};

