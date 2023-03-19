import { Films } from '../../types/films';
import useFilmChoosed from '../../hooks/use-film-choosed';

type DetailsProp = {
  films: Films[];
}

function FilmTabDetails({films}: DetailsProp): JSX.Element {
  const filmChoosed = useFilmChoosed(films);
  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{filmChoosed?.director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value" >
            {filmChoosed?.starring.map((actor, id) => {
              const keyValue = `${id}-${actor}`;
              return(
                <span style={{display: 'block'}} key={keyValue}>{actor}</span>
              );
            })}
          </span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{filmChoosed?.runTime}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{filmChoosed?.genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{filmChoosed?.released}</span>
        </p>
      </div>
    </div>
  );
}

export default FilmTabDetails;
