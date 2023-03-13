import { Link } from 'react-router-dom';

function FilmCardNav(): JSX.Element {

  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        <li className="film-nav__item film-nav__item--active">
          <Link to="#todo" className="film-nav__link">Overview</Link>
        </li>
        <li className="film-nav__item">
          <Link to="#todo" className="film-nav__link">Details</Link>
        </li>
        <li className="film-nav__item">
          <Link to="#todo" className="film-nav__link">Reviews</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FilmCardNav;
