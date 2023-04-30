import { FilmCardProps } from './film-card-small';

function FilmCardPoster({previewImage, name}: Omit<FilmCardProps, 'id' | 'videoLink' | 'previewVideoLink' >): JSX.Element {
  return (

    <div className="small-film-card__image">
      <img
        alt={name}
        src={previewImage}
        width="280"
        height="175"
      />
    </div>

  );
}

export default FilmCardPoster;
