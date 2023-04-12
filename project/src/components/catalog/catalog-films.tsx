import { useEffect } from 'react';
import CatalogGenresList from './catalog-genres-list';
//import CatalogMoreBtn from './catalog-more-btn';
import { GenreName } from '../../const';
import { getGenre } from '../../store/genres-data/genres-data.selectors';
import { getFilms, getFilmsDataLoadingStatus } from '../../store/films-data/films-data.selectors';
import FilmCard from '../film-card/film-card';
import { useAppDispatch, useAppSelector } from '../../hooks';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import { resetRenderedFilms } from '../../store/action';


function CatalogFilms(): JSX.Element {
  const dispatch = useAppDispatch();
  const activeGenre = useAppSelector(getGenre);
  const films = useAppSelector(getFilms);
  const isFilmsDataLoading = useAppSelector(getFilmsDataLoadingStatus);
  //const renderedFilmsQuantity = useAppSelector((state) => state.FILMS.);

  useEffect(() => () => {
    dispatch(resetRenderedFilms());
  }, [dispatch]);


  if (isFilmsDataLoading) {
    return (
      <LoadingScreen />
    );
  }


  const filmsGenres = ['All genres'];
  const filmsGenresSet = Array.from(new Set(films.map((film) => film.genre)));
  filmsGenresSet.forEach((genre) => filmsGenres.push(genre));

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <CatalogGenresList filmsGenres={filmsGenres} />
      <div className="catalog__films-list">
        {films//.slice(0, renderedFilmsQuantity)
          .filter((film) => {
            if (activeGenre === GenreName.ALL_GENRES) {
              return true;
            }
            return film.genre === activeGenre;
          })
          .map((film) => (
            <FilmCard
              key={film.id}
              id={film.id}
              name={film.name}
              previewImage={film.previewImage}
              posterImage={film.posterImage}
              previewVideoLink={film.previewVideoLink}
            />
          )
          )}
      </div>
      {/* TODO:  useState - массив фильмов по выбранному фильтру, в useEffect - сетить отфильрованный массив.*/}
      {/* {renderedFilmsQuantity >= films.length ? null :
        <CatalogMoreBtn />} */}
    </section>
  );
}

export default CatalogFilms;
