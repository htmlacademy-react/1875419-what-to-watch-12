import FilmCard from '../film-card/film-card-small';
import { useAppSelector } from '../../hooks';
import { getSimilarFilms, getSimilarFilmsLoadingStatus } from '../../store/films-data/films-data.selectors';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import { useParams } from 'react-router-dom';

const MAX_FILMS_COUNT = 4;


function CatalogLikeThis(): JSX.Element {
  const similarFilms = useAppSelector(getSimilarFilms);
  const isSimilarFilmsLoading = useAppSelector(getSimilarFilmsLoadingStatus);
  const {id:filmId} = useParams();
  const id = Number(filmId);

  if(isSimilarFilmsLoading) {
    return (
      <LoadingScreen />
    );
  }
  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <div className="catalog__films-list">
        {similarFilms.filter((item)=> item.id !== id).slice(0,MAX_FILMS_COUNT).map((film) => (
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
