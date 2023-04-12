//import { useEffect } from 'react';
import CatalogGenresList from './catalog-genres-list';
//import CatalogMoreBtn from './catalog-more-btn';
//import { GenreName } from '../../const';
import { getGenre } from '../../store/genres-data/genres-data.selectors';
import { getFilms, getFilmsDataLoadingStatus } from '../../store/films-data/films-data.selectors';
//import FilmCard from '../film-card/film-card';
import { useAppSelector } from '../../hooks';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
// import { resetRenderedFilms } from '../../store/action';
// import { getFilteredFilms } from '../../store/genres-data/genres-data.slice';
import useGetFilteredFilms from '../../hooks/use-get-filtered-films';
import CatalogFilmsList from './catalog-films-list';
import { GenreName } from '../../const';


function CatalogFilms(): JSX.Element {
  //const dispatch = useAppDispatch();
  const activeGenre = useAppSelector(getGenre);
  const films = useAppSelector(getFilms);
  const isFilmsDataLoading = useAppSelector(getFilmsDataLoadingStatus);
  //const renderedFilmsQuantity = useAppSelector((state) => state.FILMS.);
  const filteredFilms = useGetFilteredFilms(films, activeGenre);

  // useEffect(() => () => {
  //   //eslint-disable-next-line
  //   debugger;
  //   dispatch(resetRenderedFilms());
  //   dispatch(getFilteredFilms(filteredFilms));
  // }, [dispatch, films,activeGenre,filteredFilms]);


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
      {activeGenre === GenreName.ALL_GENRES
        ?
        <CatalogFilmsList films={films} />
        :
        <CatalogFilmsList films={filteredFilms} />}

      {/* TODO:  useState - массив фильмов по выбранному фильтру, в useEffect - сетить отфильрованный массив.*/}
      {/* {renderedFilmsQuantity >= films.length ? null :
        <CatalogMoreBtn />} */}
    </section>
  );
}

export default CatalogFilms;
