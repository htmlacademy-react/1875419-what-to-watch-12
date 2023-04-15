import { useMemo } from 'react';
import CatalogGenreItem from './catalog-genre-item';

type GenresProp = {
  filmsGenres: string[];
}

function CatalogGenresList({filmsGenres}: GenresProp): JSX.Element {
  return (
    <>
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <ul className="catalog__genres-list">
        {useMemo(() => filmsGenres.map((genre) => (
          <CatalogGenreItem genre={genre} key={genre} />
        )), [filmsGenres])}
      </ul>
    </>
  );
}

export default CatalogGenresList;
