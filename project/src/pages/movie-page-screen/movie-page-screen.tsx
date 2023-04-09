import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import cn from 'classnames';
import AddToFavoriteButton from '../../components/film-card-buttons/add-to-favorite-button';
import CatalogLikeThis from '../../components/catalog/catalog-like-this';
import { fetchChoosedFilmAction, fetchFilmCommentsAction, fetchSimilarFilmsAction } from '../../store/api-actions';
import FilmTabDetails from '../../components/film-tabs/film-tab-details';
import FilmTabOverview from '../../components/film-tabs/film-tab-overview';
import FilmTabReviews from '../../components/film-tabs/film-tab-reviews';
import Footer from '../../components/footer/footer';
import PlayButton from '../../components/film-card-buttons/play-button';
import UnauthorizedUserHeader from '../../components/user-header/unauthorized-user-header';
import UserBlock from '../../components/user-header/user-block';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Films } from '../../types/films';


function MoviePageScreen(): JSX.Element {
  const {id: idUrl} = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isUserAuthorized = useAppSelector((state) => state.authorizationStatus);

  const choosedFilm = useAppSelector((state) => state.choosedFilm);
  const films = useAppSelector((state) => state.similarFilms);
  const reviews = useAppSelector((state) => state.filmComments);

  const filmsIds = useAppSelector((state) => state.films);
  const filmsIdsData = Array.from(new Set((filmsIds.map((film) => film.id))));
  const isFilmExist = filmsIdsData.includes(Number(idUrl));

  useEffect(() => {
    //TODO: не работает переход к сущестующему фильму при обращении через адресную строку
    if (idUrl && isFilmExist) {
      dispatch(fetchChoosedFilmAction(idUrl));
      dispatch(fetchFilmCommentsAction(idUrl));
      dispatch(fetchSimilarFilmsAction(idUrl));
    } else {
      navigate('/*');
    }
  },[idUrl, isFilmExist, dispatch, navigate]);


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
            {isUserAuthorized === 'AUTH'
              ?
              <UserBlock />
              :
              <UnauthorizedUserHeader />}

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
                {(isUserAuthorized !== 'AUTH')
                  ?
                  ''
                  :
                  <Link to={`/films/${Number(idUrl)}/review`} className="btn film-card__button">Add review</Link>}
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
                <FilmTabOverview film={choosedFilm as Films} />
                :
                ''}
              { isTabActive.isDetailsActive
                ?
                <FilmTabDetails film={choosedFilm as Films} />
                :
                ''}
              { isTabActive.isReviewsActive
                ?
                <FilmTabReviews reviews={reviews}/>
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
