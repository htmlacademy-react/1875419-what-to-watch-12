import { memo } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../utils/const';
import { useAppDispatch } from '../../hooks';
import { logoutAction } from '../../store/api-actions';

function UserBlock(): JSX.Element {
  const dispatch = useAppDispatch();

  const onClick = () => {
    dispatch(logoutAction());
  };

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <Link to={AppRoute.MyList}>
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </Link>
      </li>
      <li className="user-block__item">
        <Link onClick={onClick} className="user-block__link" to={AppRoute.SignIn}>Sign out</Link>
      </li>
    </ul>
  );
}

export default memo(UserBlock);
