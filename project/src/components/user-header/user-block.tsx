import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import Logo from '../logo/logo';
import { logoutAction } from '../../store/api-actions';

function UserBlock(): JSX.Element {
  const dispatch = useAppDispatch();

  const onClick = () => {
    dispatch(logoutAction());
  };

  return (
    <>
      <Logo />
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </li>
        <li className="user-block__item">
          <Link onClick={onClick} className="user-block__link" to={AppRoute.SignIn}>Sign out</Link>
        </li>
      </ul>
    </>
  );
}

export default UserBlock;
