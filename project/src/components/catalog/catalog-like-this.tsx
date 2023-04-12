import { Films } from '../../types/films';
import FilmCard from '../film-card/film-card';
import useFilmChoosed from '../../hooks/use-film-choosed';
import { useAppSelector } from '../../hooks';
import { getSimilarFilmsLoadingStatus } from '../../store/films-data/films-data.selectors';
import LoadingScreen from '../../pages/loading-screen/loading-screen';

const FILMS_COUNT = 4;

type FilmsLikeThisProp = {
  films: Films[];
}

function CatalogLikeThis({films}: FilmsLikeThisProp): JSX.Element {
  const filmChoosed = useFilmChoosed(films);
  const similarFilms = (films.filter((film) => film.genre === filmChoosed?.genre)).slice(0,FILMS_COUNT);
  const theSameFilm = similarFilms.indexOf(filmChoosed as Films);
  if (theSameFilm !== -1){
    similarFilms.splice(theSameFilm, 1);
  }

  const isSimilarFilmsLoading = useAppSelector(getSimilarFilmsLoadingStatus);

  if(isSimilarFilmsLoading) {
    return (
      <LoadingScreen />
    );
  }
  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <div className="catalog__films-list">
        {similarFilms.map((film) => (
          <FilmCard
            key={film.id}
            id={film.id}
            name={film.name}
            previewImage={film.previewImage}
            previewVideoLink={film.previewVideoLink}
          />
        )
        )}
      </div>
    </section>
  );
}

export default CatalogLikeThis;
