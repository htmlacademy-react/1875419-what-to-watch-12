import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import cn from 'classnames';
import AddToFavoriteButton from '../../components/film-card-buttons/add-to-favorite-button';
import CatalogLikeThis from '../../components/catalog/catalog-like-this';
import FilmTabDetails from '../../components/film-tabs/film-tab-details';
import FilmTabOverview from '../../components/film-tabs/film-tab-overview';
import FilmTabReviews from '../../components/film-tabs/film-tab-reviews';
import Footer from '../../components/footer/footer';
import PlayButton from '../../components/film-card-buttons/play-button';
import UserBlock from '../../components/user-header/user-block';
import { useAppDispatch } from '../../hooks';
import { useEffect } from 'react';
import { fetchFilmsAction, fetchChoosedFilmAction, fetchFilmCommentsAction } from '../../store/api-actions';
import { useAppSelector } from '../../hooks';


function MoviePageScreen(): JSX.Element {
  const {id: idUrl} = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (idUrl) {
      dispatch(fetchChoosedFilmAction(idUrl));
      dispatch(fetchFilmCommentsAction(idUrl));
    } else {
      dispatch(fetchFilmsAction());
    }
  },[idUrl, dispatch]);


  const choosedFilm = useAppSelector((state) => state.choosedFilm);
  const films = useAppSelector((state) => state.films);
  const reviews = useAppSelector((state) => state.filmComments);


  const [isTabActive, setIsTabActive] = useState({
    isOverviewActive: true,
    isDetailsActive: false,
    isReviewsActive: false
  });


  return (
    <>
      <section className="film-card film-card--full" style={{backgroundColor: choosedFilm?.backgroundColor}}>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={choosedFilm?.backgroundImage} alt={choosedFilm?.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">

            <UserBlock />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{choosedFilm?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{choosedFilm?.genre}</span>
                <span className="film-card__year">{choosedFilm?.released}</span>
              </p>

              <div className="film-card__buttons">
                <PlayButton id={choosedFilm?.id as number}/>
                <AddToFavoriteButton />
                <Link to={`/films/${Number(idUrl)}/review`} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={choosedFilm?.posterImage} alt={choosedFilm?.name} width="218" height="327" />
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
                    <Link to={`/films/${Number(idUrl)}`} className="film-nav__link">Overview</Link>
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
                    <Link to={`/films/${Number(idUrl)}/details`} className="film-nav__link">Details</Link>
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
                    <Link to={`/films/${Number(idUrl)}/reviews`} className="film-nav__link">Reviews</Link>
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
