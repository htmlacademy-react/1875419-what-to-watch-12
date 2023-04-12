import { FilmCardProps } from './film-card';

function FilmCardPoster({previewImage, name}: Omit<FilmCardProps, 'id' | 'videoLink' | 'previewVideoLink' >): JSX.Element {
  return (
    <>
      <div className="small-film-card__image">
        <img
          alt={name}
          src={previewImage}
          width="280"
          height="175"
        />
      </div>
      <h3 className="small-film-card__title">
        <span className={'small-film-card__link'}>
          {name}
        </span>
      </h3>
    </>
  );
}

export default FilmCardPoster;
