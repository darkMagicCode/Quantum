import { createBrowserRouter } from 'react-router-dom';
import { UsersPage } from './pages/UsersPage';
import { ProfilePage } from './pages/ProfilePage';
import {
  LayoutWrapper,
  ProtectedRoutesWrapper,
  LoginRoute,
  RootRoute,
} from './routes/components';

export const router = createBrowserRouter([
  {
    element: <LayoutWrapper />,
    children: [
      {
        path: '/login',
        element: <LoginRoute />,
      },
      {
        path: '/',
        element: <RootRoute />,
      },
      {
        element: <ProtectedRoutesWrapper />,
        children: [
          {
            path: '/users',
            element: <UsersPage />,
          },
          {
            path: '/profile',
            element: <ProfilePage />,
          },
        ],
      },
    ],
  },
]);

