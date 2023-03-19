import { Films } from '../../types/films';
import { FilmRating } from '../../const';
import useFilmChoosed from '../../hooks/use-film-choosed';

type OverviewProp ={
  films: Films[];
}
function FilmTabOverview({films}: OverviewProp): JSX.Element {
  const filmChoosed = useFilmChoosed(films);
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{filmChoosed?.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{FilmRating(filmChoosed?.rating)}</span>
          <span className="film-rating__count">{filmChoosed?.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{filmChoosed?.description}</p>

        <p className="film-card__director"><strong>Director: {filmChoosed?.director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {filmChoosed?.starring.join(', ')} and other</strong></p>
      </div>
    </>
  );
}

export default FilmTabOverview;
