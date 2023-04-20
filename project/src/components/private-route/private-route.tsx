import {Navigate} from 'react-router-dom';
import {AppRoute} from '../../utils/const';
import { getToken } from '../../services/token';

type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {children} = props;

  return (
    getToken()
      ? children
      : <Navigate to={AppRoute.SignIn} />
  );
}

export default PrivateRoute;
