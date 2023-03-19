import { Link } from 'react-router-dom';
import VideoPlayer from '../video-player/video-player';
import { useState } from 'react';

export type FilmCardProp = {
	name: string;
	previewImage: string;
	id: number;
  onMouseEnterHandler: () => void;
  previewVideoLink: string;
  posterImage: string;
}


function FilmCard({
  previewImage,
  name,
  id,
  onMouseEnterHandler,
  posterImage,
  previewVideoLink
}: FilmCardProp): JSX.Element {
  const [isActive, setIsActive] = useState(false);

  const onMouseOverHandler = () => {
    setIsActive(true);
  };

  const onMouseOutHandler = () => {
    setIsActive(false);
  };

  return (
    <article
      onMouseEnter={onMouseEnterHandler}
      onMouseOver={onMouseOverHandler}
      onMouseOut={onMouseOutHandler}
      className="small-film-card catalog__films-card"
    >
      <Link className="small-film-card__link" to={`films/${id}`}>
        {
          isActive ?
            <VideoPlayer previewVideoLink={previewVideoLink} posterImage={posterImage} />
            :
            <div className="small-film-card__image">
              <img src={previewImage} alt={name} width="280" height="175" />
            </div>
        }

        <h3 className="small-film-card__title">
          <span>
            {name}
          </span>
        </h3>
      </Link>
    </article>

  );
}

export default FilmCard;
