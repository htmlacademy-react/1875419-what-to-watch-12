import { Films } from '../../types/films';
import FilmCard from '../film-card/film-card';

type CatalogFilmsListProps = {
  films: Films[];
}

function CatalogFilmsList({films}: CatalogFilmsListProps): JSX.Element {
  return(
    <div className="catalog__films-list">
      {films.map((film) => (
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
  );
}

export default CatalogFilmsList;
