import { Films } from '../../types/films';

type FavoriteButtonProp = {
  myFilms: Films[];
}

function AddToFavoriteButton({myFilms}: FavoriteButtonProp): JSX.Element {
  return (
    <button className="btn btn--list film-card__button" type="button">
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="#add"></use>
      </svg>
      <span>My list</span>
      <span className="film-card__count">{myFilms.length}</span>
    </button>
  );
}

export default AddToFavoriteButton;
