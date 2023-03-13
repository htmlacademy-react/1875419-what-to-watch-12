import { Link } from 'react-router-dom';

export type FilmCardProp = {
	name: string;
	previewImage: string;
	id: number;
  onMouseEnterHandler: () => void;
}


function FilmCard({previewImage, name, id, onMouseEnterHandler}: FilmCardProp): JSX.Element {
  return (
    <article onMouseEnter={onMouseEnterHandler} className="small-film-card catalog__films-card">
      <Link className="small-film-card__link" to={`films/${id}`}>
        <div className="small-film-card__image">
          <img src={previewImage} alt={name} width="280" height="175" />
        </div>
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
