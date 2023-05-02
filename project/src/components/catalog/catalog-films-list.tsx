import { useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFilmsToRenderQuantity } from '../../store/films-data/films-data.selectors';
import { Films } from '../../types/films';
import FilmCardSmall from '../film-card/film-card-small';
import CatalogMoreBtn from './catalog-more-btn';
import { resetRenderedFilms } from '../../store/films-data/films-data.slice';

type CatalogFilmsListProps = {
  films: Films[];
}

function CatalogFilmsList({films}: CatalogFilmsListProps): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => () => {
    dispatch(resetRenderedFilms());
  }, [dispatch]);

  const renderedFilmsQuantity = useAppSelector(getFilmsToRenderQuantity);
  return(
    <>
      <div className="catalog__films-list">
        {useMemo(() => (films.slice(0, renderedFilmsQuantity)
          .map((film) => (
            <FilmCardSmall
              key={film.id}
              id={film.id}
              name={film.name}
              previewImage={film.previewImage}
              previewVideoLink={film.previewVideoLink}
            />
          )
          )), [films, renderedFilmsQuantity])}
      </div>
      {renderedFilmsQuantity <= films.length && <CatalogMoreBtn />}
    </>
  );
}

export default CatalogFilmsList;
