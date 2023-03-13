import AddToFavoriteButton from '../../components/film-card-buttons/add-to-favorite-button';
import CatalogLikeThis from '../../components/catalog-like-this/catalog-like-this';
import { Films } from '../../types/films';
import FilmCardNav from '../../components/film-nav/film-card-nav';
import { FilmRating } from '../../const';
import Footer from '../../components/footer/footer';
import { Link, useParams } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import PlayButton from '../../components/film-card-buttons/play-button';
import UserBlock from '../../components/user-header/user-block';

type MoviePageProp = {
  films: Films[];
  myFilms: Films[];
}

function MoviePageScreen({films, myFilms}: MoviePageProp): JSX.Element {

  const {id} = useParams();

  const filmChoosed = films.find((film) => film.id === Number(id));

  return (
    <>
      <section className="film-card film-card--full" style={{backgroundColor: filmChoosed?.backgroundColor}}>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={filmChoosed?.backgroundImage} alt={filmChoosed?.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo />

            <UserBlock />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{filmChoosed?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{filmChoosed?.genre}</span>
                <span className="film-card__year">{filmChoosed?.released}</span>
              </p>

              <div className="film-card__buttons">
                <PlayButton id={filmChoosed?.id as number}/>
                <AddToFavoriteButton myFilms={myFilms}/>
                <Link to={`/films/${Number(id)}/review`} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={filmChoosed?.posterImage} alt={filmChoosed?.name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <FilmCardNav />

              <div className="film-rating">
                <div className="film-rating__score">{filmChoosed?.rating}</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">{FilmRating(filmChoosed?.rating)}</span>
                  <span className="film-rating__count">{filmChoosed?.scoresCount} ratings</span>
                </p>
              </div>

              <div className="film-card__text">
                <p>{filmChoosed?.description}</p>

                <p className="film-card__director"><strong>Director: {filmChoosed?.director}</strong></p>

                <p className="film-card__starring"><strong>Starring: {filmChoosed?.starring.join(', ')} and other</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <CatalogLikeThis />
        <Footer />
      </div>
    </>
  );
}

export default MoviePageScreen;
