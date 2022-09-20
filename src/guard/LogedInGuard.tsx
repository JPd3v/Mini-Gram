import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { PrivateRoutes } from '../models/routes';

export default function LogedInGuard() {
  const { userInformation } = useAuth();

  return userInformation ? (
    <Navigate replace to={PrivateRoutes.HOME} />
  ) : (
    <Outlet />
  );
}
