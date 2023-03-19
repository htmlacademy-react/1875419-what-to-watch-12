import CatalogGenres from './catalog-genres';
import CatalogMoreBtn from './catalog-more-btn';
import { Films } from '../../types/films';
import FilmCard from '../film-card/film-card';

const FILMS_SHOWN = 8;

type FilmsCatalogProp = {
  films: Films[];
}

function CatalogFilms({films}: FilmsCatalogProp): JSX.Element {
  const filmsShowed = films.slice(0,FILMS_SHOWN);
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <CatalogGenres />
      <div className="catalog__films-list">
        {filmsShowed.map((film) => (
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
