import { Films } from '../../types/films';
import FilmCard, {FilmCardProp} from '../film-card/film-card';
import CatalogGenres from './catalog-genres';
import CatalogMoreBtn from './catalog-more-btn';

type FilmsCatalogProp = {
  films: Films[];
}

function Catalog({films}: FilmsCatalogProp): JSX.Element {
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <CatalogGenres />
      <div className="catalog__films-list">
        {films.map(({previewImage, id, name}: FilmCardProp) => (
          <FilmCard
            key={id}
            id={id}
            name={name}
            previewImage={previewImage}
          />
        )
        )}
      </div>

      <CatalogMoreBtn />
    </section>
  );
}

export default Catalog;
