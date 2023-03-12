import AddToFavoriteButton from '../film-card-buttons/add-to-favorite-button';
import { Films } from '../../types/films';
import Logo from '../logo/logo';
import PlayButton from '../film-card-buttons/play-button';
import UserBlock from '../user-header/user-block';

type MainFilmInfoProp = {
  films: Films[];
  myFilms: Films[];
}

function MainFilmCard({films, myFilms}: MainFilmInfoProp) : JSX.Element {
  const firstFilm = films[0];

  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={firstFilm.backgroundImage} alt="" />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header film-card__head">
        <Logo />

        <UserBlock />
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
              <PlayButton id={firstFilm.id}/>
              <AddToFavoriteButton myFilms={myFilms} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainFilmCard;
