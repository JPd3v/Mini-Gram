import { Link } from 'react-router-dom';
import { PrivateRoutes, PublicRoutes } from '../models/routes';
import { logOut } from '../services/auth';

export default function Navbar() {
  return (
    <nav className="flex flex-row justify-evenly ">
      <Link to={PrivateRoutes.HOME}>logo</Link>
      <Link to={PrivateRoutes.HOME}>home svg placeholder</Link>
      <Link to={PublicRoutes.USERPROFILE}>profile</Link>
      <div>
        dropdown placeholeder
        <button
          type="button"
          onClick={() => {
            logOut();
          }}
        >
          logout
        </button>
      </div>
    </nav>
  );
}
