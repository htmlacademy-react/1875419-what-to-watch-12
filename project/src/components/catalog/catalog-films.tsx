import CatalogGenresList from './catalog-genres-list';
import CatalogMoreBtn from './catalog-more-btn';
import { GenreName } from '../../const';
import FilmCard from '../film-card/film-card';
import { useAppSelector } from '../../hooks';
import LoadingScreen from '../../pages/loading-screen/loading-screen';


function CatalogFilms(): JSX.Element {
  const activeGenre = useAppSelector((state) => state.activeGenre);
  const films = useAppSelector((state) => state.films);
  const isFilmsDataLoading = useAppSelector((state) => state.isFilmsDataLoading);


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
        {films.filter((film) => {
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

      <CatalogMoreBtn />
    </section>
  );
}

export default CatalogFilms;
