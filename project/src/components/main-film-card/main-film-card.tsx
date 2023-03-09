import { AppRoute } from '../../const';
import { Films } from '../../types/films';
import { Link } from 'react-router-dom';
import Logo from '../logo/logo';

type MainFilmInfoProp = {
  films: Films[];
}

function MainFilmCard({films}: MainFilmInfoProp) : JSX.Element {
  //eslint-disable-next-line
  console.log(films[0]);
  const firstFilm = films[0];
  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={firstFilm.backgroundImage} alt="" />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header film-card__head">
        <Logo />

        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <Link className="user-block__link" to={AppRoute.SignIn}>Sign out</Link>
          </li>
        </ul>
      </header>

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={firstFilm.posterImage} alt={firstFilm.name} width="218" height="327" />
          </div>

          <div className="film-card__desc">
            <h2 className="film-card__title">{firstFilm.name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{firstFilm.genre}</span>
              <span className="film-card__year">{firstFilm.released}</span>
            </p>

            <div className="film-card__buttons">
              <button className="btn btn--play film-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list film-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
                <span className="film-card__count">9</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainFilmCard;
