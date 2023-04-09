import AddToFavoriteButton from '../film-card-buttons/add-to-favorite-button';
import { AuthorizationStatus } from '../../const';
import PlayButton from '../film-card-buttons/play-button';
import UserBlock from '../user-header/user-block';
import { useAppSelector } from '../../hooks';
import UnauthorizedUserHeader from '../user-header/unauthorized-user-header';


function MainFilmCard() : JSX.Element {
  const promoFilm = useAppSelector((state) => state.promoFilm);
  const isUserAuthorized = useAppSelector((state) => state.authorizationStatus);
  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={promoFilm?.backgroundImage} alt="" />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header film-card__head">
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
              <AddToFavoriteButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainFilmCard;
