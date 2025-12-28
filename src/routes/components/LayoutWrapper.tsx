import { Outlet } from 'react-router-dom';
import { AppLayout } from '../../components/Layout/AppLayout';

export const LayoutWrapper = () => (
  <AppLayout>
    <Outlet />
  </AppLayout>
);

