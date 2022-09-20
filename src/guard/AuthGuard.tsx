import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { PublicRoutes } from '../models/routes';

export default function AuthGuard() {
  const { userInformation } = useAuth();
  console.log(userInformation);

  return userInformation ? (
    <Outlet />
  ) : (
    <Navigate replace to={PublicRoutes.LOGIN} />
  );
}
