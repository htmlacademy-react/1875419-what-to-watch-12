import CatalogGenresList from './catalog-genres-list';
import { getGenre } from '../../store/genres-data/genres-data.selectors';
import { getFilms, getFilmsDataLoadingStatus } from '../../store/films-data/films-data.selectors';
import { useAppSelector } from '../../hooks';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import useGetFilteredFilms from '../../hooks/use-get-filtered-films';
import CatalogFilmsList from './catalog-films-list';
import { GenreName } from '../../const';


function CatalogFilms(): JSX.Element {
  const activeGenre = useAppSelector(getGenre);
  const films = useAppSelector(getFilms);
  const isFilmsDataLoading = useAppSelector(getFilmsDataLoadingStatus);
  const filteredFilms = useGetFilteredFilms(films, activeGenre);

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

    </section>
  );
}

export default CatalogFilms;
