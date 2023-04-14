import AddToFavoriteButton from '../film-card-buttons/add-to-favorite-button';
import { AuthorizationStatus } from '../../const';
import { getPromoFilm, getPromoFilmLoadingStatus } from '../../store/films-data/films-data.selectors';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selectors';
import Logo from '../logo/logo';
import PlayButton from '../film-card-buttons/play-button';
import UserBlock from '../user-header/user-block';
import { useAppSelector } from '../../hooks';
import UnauthorizedUserHeader from '../user-header/unauthorized-user-header';
import LoadingScreen from '../../pages/loading-screen/loading-screen';


function MainFilmCard() : JSX.Element {
  const promoFilm = useAppSelector(getPromoFilm);
  const isUserAuthorized = useAppSelector(getAuthorizationStatus);
  const isPromoFilmLoading = useAppSelector(getPromoFilmLoadingStatus);

  if (isPromoFilmLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={promoFilm?.backgroundImage} alt="" />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header film-card__head">
        <Logo />
        {(isUserAuthorized === AuthorizationStatus.Auth) ? <UserBlock /> : <UnauthorizedUserHeader/>}

      </header>

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={promoFilm?.posterImage} alt={promoFilm?.name} width="218" height="327" />
          </div>

          <div className="film-card__desc">
            <h2 className="film-card__title">{promoFilm?.name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{promoFilm?.genre}</span>
              <span className="film-card__year">{promoFilm?.released}</span>
            </p>

            <div className="film-card__buttons">
              <PlayButton id={promoFilm?.id as number}/>
              <AddToFavoriteButton filmId={promoFilm?.id as number} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainFilmCard;
