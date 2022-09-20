import { Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import AuthGuard from './guard/AuthGuard';
import { PrivateRoutes, PublicRoutes } from './models/routes';
import PageLayout from './utilities/PageLayout';
import RoutesWithNotFound from './utilities/routes-with-not-found';
import LogedInGuard from './guard/LogedInGuard';

const Home = lazy(() => import('./pages/Private/Home'));
const Register = lazy(() => import('./pages/Register'));
const Login = lazy(() => import('./pages/Login'));
const UserProfile = lazy(() => import('./pages/UserProfile'));
const AccountSettings = lazy(() => import('./pages/Private/AccountSettings'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<>loading spinner place holder</>}>
        <RoutesWithNotFound>
          <Route path="/" element={<Navigate to={PrivateRoutes.HOME} />} />
          <Route element={<LogedInGuard />}>
            <Route path={PublicRoutes.REGISTER} element={<Register />} />
            <Route path={PublicRoutes.LOGIN} element={<Login />} />
          </Route>
          <Route element={<PageLayout />}>
            <Route path={PublicRoutes.USERPROFILE} element={<UserProfile />} />
            <Route element={<AuthGuard />}>
              <Route path={PrivateRoutes.HOME} element={<Home />} />
              <Route
                path={PrivateRoutes.ACCOUNTSETTINGS}
                element={<AccountSettings />}
              />
            </Route>
          </Route>
        </RoutesWithNotFound>
      </Suspense>
    </div>
  );
}

export default App;
