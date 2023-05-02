import { Link } from 'react-router-dom';
import { useState } from 'react';
import FilmCardToggle from './film-card-toggle';

export type FilmCardProps = {
	name: string;
	previewImage: string;
	id: number;
  previewVideoLink: string;
}


function FilmCardSmall({
  previewImage,
  name,
  id,
  previewVideoLink
}: FilmCardProps): JSX.Element {
  const [isActive, setIsActive] = useState(false);

  const onMouseOverHandler = () => {
    setIsActive(true);
  };

  const onMouseOutHandler = () => {
    setIsActive(false);
  };

  return (
    <article
      onMouseOver={onMouseOverHandler}
      onMouseOut={onMouseOutHandler}
      className="small-film-card catalog__films-card"
      data-testid="card-article"
    >
      <Link className="small-film-card__link" to={`/films/${id}`} data-testid="link-to-film">
        <FilmCardToggle
          isActive={isActive}
          videoLink={previewVideoLink}
          previewImage={previewImage}
          name={name}
        />

        <h3 className="small-film-card__title">
          <span>
            {name}
          </span>
        </h3>
      </Link>
    </article>

  );
}

export default FilmCardSmall;
