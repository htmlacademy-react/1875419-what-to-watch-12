import { memo } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../utils/const';
import { getUserData } from '../../store/user-process/user-process.selectors';
import { logoutAction } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../hooks';

function UserBlock(): JSX.Element {
  const dispatch = useAppDispatch();
  const userData = useAppSelector(getUserData);


  const onClick = () => {
    dispatch(logoutAction());
  };

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <Link to={AppRoute.MyList}>
          <div className="user-block__avatar" data-testid="user-avatar">
            <img src={userData?.avatarUrl} alt={userData?.name} width="63" height="63" />
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
