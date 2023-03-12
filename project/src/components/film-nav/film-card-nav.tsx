import { Link } from 'react-router-dom';
import { useState } from 'react';

function FilmCardNav(): JSX.Element {
  const [activeView, setActiveView] = useState();
  //eslint-disable-next-line
  console.log(activeView, setActiveView);
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
