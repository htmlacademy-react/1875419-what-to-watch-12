import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { fetchFavoriteFilmsAction, postFavoriteFilm } from '../../store/api-actions';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selectors';
import { getFavoriteFilmsAmount, getIsFilmFavorite } from '../../store/films-data/films-data.selectors';
import { useAppDispatch, useAppSelector } from '../../hooks';


type FavoriteButtonProps = {
  filmId: number;
}

function AddToFavoriteButton({filmId}: FavoriteButtonProps): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const filmsAmount = useAppSelector(getFavoriteFilmsAmount);
  const isAuthorized = useAppSelector(getAuthorizationStatus);
  const isFavorite = useAppSelector(getIsFilmFavorite(filmId));

  useEffect(() => {
    if (isAuthorized === AuthorizationStatus.Auth) {
      dispatch(fetchFavoriteFilmsAction());
    }
  }, [isAuthorized, dispatch]);

  const handleButtonClick = () => {
    isAuthorized === AuthorizationStatus.Auth
      ? dispatch(postFavoriteFilm({ filmId, status: isFavorite ? 0 : 1 }))
      : navigate(AppRoute.SignIn);
  };
  //TODO: рендерить компонент при клике на кнопку???
  // useEffect(() => {

  // });
  return (
    <button className="btn btn--list film-card__button" type="button" onClick={handleButtonClick}>
      {isAuthorized === 'AUTH' && isFavorite ? (
        <svg viewBox="0 0 18 14" width="18" height="14">
          <use xlinkHref="#in-list"></use>
        </svg>
      )
        : (
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref="#add"></use>
          </svg>
        )}
      <span>My list</span>
      <span className="film-card__count">{isAuthorized === AuthorizationStatus.Auth ? filmsAmount : 0}</span>
    </button>
  );
}
export default AddToFavoriteButton;

