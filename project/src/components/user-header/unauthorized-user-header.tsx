import { memo } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../utils/const';

function UnauthorizedUserHeader(): JSX.Element {
  return (
    <div className="user-block">
      <Link to={AppRoute.SignIn} className="user-block__link">Sign in</Link>
    </div>
  );
}

export default memo(UnauthorizedUserHeader);
