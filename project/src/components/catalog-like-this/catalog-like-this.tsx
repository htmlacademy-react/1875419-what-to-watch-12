import { Films } from '../../types/films';
import FilmCard from '../film-card/film-card';
import useFilmChoosed from '../../hooks/use-film-choosed';

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
            posterImage={film.posterImage}
            previewVideoLink={film.previewVideoLink}
          />
        )
        )}
      </div>
    </section>
  );
}

export default CatalogLikeThis;
