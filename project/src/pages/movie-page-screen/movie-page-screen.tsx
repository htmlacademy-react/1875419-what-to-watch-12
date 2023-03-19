import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import cn from 'classnames';
import AddToFavoriteButton from '../../components/film-card-buttons/add-to-favorite-button';
import CatalogLikeThis from '../../components/catalog-like-this/catalog-like-this';
import { Films } from '../../types/films';
import FilmTabDetails from '../../components/film-tabs/film-tab-details';
import FilmTabOverview from '../../components/film-tabs/film-tab-overview';
import FilmTabReviews from '../../components/film-tabs/film-tab-reviews';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import PlayButton from '../../components/film-card-buttons/play-button';
import { Reviews } from '../../types/reviews';
import useFilmChoosed from '../../hooks/use-film-choosed';
import UserBlock from '../../components/user-header/user-block';

type MoviePageProp = {
  films: Films[];
  myFilms: Films[];
  reviews: Reviews[];
}

function MoviePageScreen({films, myFilms, reviews}: MoviePageProp): JSX.Element {
  const [isTabActive, setIsTabActive] = useState({
    isOverviewActive: true,
    isDetailsActive: false,
    isReviewsActive: false
  });

  const {id} = useParams();

  const filmChoosed = useFilmChoosed(films);

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
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className={cn(
                    'film-nav__item',
                    {'film-nav__item--active' : isTabActive.isOverviewActive }
                  )}
                  onClick={() => {
                    setIsTabActive({...isTabActive,
                      isDetailsActive: false,
                      isOverviewActive: true,
                      isReviewsActive: false});
                  }}
                  >
                    <Link to={`/films/${Number(id)}`} className="film-nav__link">Overview</Link>
                  </li>
                  <li className={cn(
                    'film-nav__item',
                    {'film-nav__item--active' : isTabActive.isDetailsActive }
                  )}
                  onClick={() => {
                    setIsTabActive({...isTabActive,
                      isDetailsActive: true,
                      isOverviewActive: false,
                      isReviewsActive: false});
                  }}
                  >
                    <Link to={`/films/${Number(id)}/details`} className="film-nav__link">Details</Link>
                  </li>
                  <li className={cn(
                    'film-nav__item',
                    {'film-nav__item--active' : isTabActive.isReviewsActive }
                  )}
                  onClick={() => {
                    setIsTabActive({...isTabActive,
                      isDetailsActive: false,
                      isOverviewActive: false,
                      isReviewsActive: true});
                  }}
                  >
                    <Link to={`/films/${Number(id)}/reviews`} className="film-nav__link">Reviews</Link>
                  </li>
                </ul>
              </nav>
              { isTabActive.isOverviewActive
                ?
                <FilmTabOverview films={films} />
                :
                ''}
              { isTabActive.isDetailsActive
                ?
                <FilmTabDetails films={films} />
                :
                ''}
              { isTabActive.isReviewsActive
                ?
                <FilmTabReviews films={films} reviews={reviews}/>
                :
                ''}

            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <CatalogLikeThis films={films}/>
        <Footer />
      </div>
    </>
  );
}

export default MoviePageScreen;
