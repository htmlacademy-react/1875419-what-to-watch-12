import { Link } from 'react-router-dom';
import Logo from '../logo/logo';
import { AppRoute } from '../../const';

function UnauthorizedUserHeader(): JSX.Element {
  return (
    <>
      <Logo />

      <div className="user-block">
        <Link to={AppRoute.SignIn} className="user-block__link">Sign in</Link>
      </div>
    </>
  );
}

export default UnauthorizedUserHeader;
