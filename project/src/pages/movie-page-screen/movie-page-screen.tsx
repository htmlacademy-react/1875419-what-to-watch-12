import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import cn from 'classnames';
import AddToFavoriteButton from '../../components/film-card-buttons/add-to-favorite-button';
import { AuthorizationStatus } from '../../const';
import CatalogLikeThis from '../../components/catalog/catalog-like-this';
import { checkAuthAction, fetchChoosedFilmAction, fetchFilmCommentsAction, fetchSimilarFilmsAction } from '../../store/api-actions';
import FilmTabDetails from '../../components/film-tabs/film-tab-details';
import FilmTabOverview from '../../components/film-tabs/film-tab-overview';
import FilmTabReviews from '../../components/film-tabs/film-tab-reviews';
import Footer from '../../components/footer/footer';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selectors';
import { getChoosedFilm, getChoosedFilmError, getChoosedFilmLoadingStatus, getFilmComments, getSimilarFilmsLoadingStatus } from '../../store/films-data/films-data.selectors';
import LoadingScreen from '../loading-screen/loading-screen';
import Logo from '../../components/logo/logo';
import PlayButton from '../../components/film-card-buttons/play-button';
import UnauthorizedUserHeader from '../../components/user-header/unauthorized-user-header';
import UserBlock from '../../components/user-header/user-block';
import { useAppDispatch, useAppSelector } from '../../hooks';
import NotFoundScreen from '../not-found-screen/not-found-screen';


function MoviePageScreen(): JSX.Element {
  const {id: idUrl} = useParams();
  const id = Number(idUrl);
  const dispatch = useAppDispatch();

  const isUserAuthorized = useAppSelector(getAuthorizationStatus);
  const isChoosedFilmLoading = useAppSelector(getChoosedFilmLoadingStatus);
  const isSimilarFilmsLoading = useAppSelector(getSimilarFilmsLoadingStatus);
  const choosedFilmError = useAppSelector(getChoosedFilmError);

  const choosedFilm = useAppSelector(getChoosedFilm);
  const reviews = useAppSelector(getFilmComments);


  useEffect(() => {
    if (id) {
      dispatch(fetchChoosedFilmAction(id));
      dispatch(fetchFilmCommentsAction(id));
      dispatch(fetchSimilarFilmsAction(id));
      dispatch(checkAuthAction());
    }
  },[id, dispatch]);


  const [isTabActive, setIsTabActive] = useState({
    isOverviewActive: true,
    isDetailsActive: false,
    isReviewsActive: false
  });

  if (isChoosedFilmLoading || isSimilarFilmsLoading) {
    return (
      <LoadingScreen />
    );
  }

  if (!id || !choosedFilm || choosedFilmError){
    return (
      <NotFoundScreen />
    );
  }

  return (
    <>
      <section className="film-card film-card--full" style={{backgroundColor: choosedFilm.backgroundColor}}>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={choosedFilm.backgroundImage} alt={choosedFilm.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo />
            {isUserAuthorized === AuthorizationStatus.Auth
              ?
              <UserBlock />
              :
              <UnauthorizedUserHeader />}

          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{choosedFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{choosedFilm.genre}</span>
                <span className="film-card__year">{choosedFilm.released}</span>
              </p>

              <div className="film-card__buttons">
                <PlayButton id={choosedFilm.id}/>
                <AddToFavoriteButton filmId={id}/>
                {(isUserAuthorized === AuthorizationStatus.Auth) && <Link to={`/films/${id}/review`} className="btn film-card__button">Add review</Link>}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={choosedFilm.posterImage} alt={choosedFilm.name} width="218" height="327" />
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
              { isTabActive.isOverviewActive && <FilmTabOverview film={choosedFilm} />}
              { isTabActive.isDetailsActive && <FilmTabDetails film={choosedFilm} />}
              { isTabActive.isReviewsActive && <FilmTabReviews reviews={reviews}/>}
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
