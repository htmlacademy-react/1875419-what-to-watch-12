import { Films } from '../../types/films';
import { Link, useParams } from 'react-router-dom';

type BreadcrumbsProp = {
  films: Films[];
}

function Breadcrumbs({films}: BreadcrumbsProp): JSX.Element {
  const {id} = useParams();
  const filmChoosed = films.find((film) => film.id === Number(id));
  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link to={`/films/${Number(id)}`} className="breadcrumbs__link">{filmChoosed?.name}</Link>
        </li>
        <li className="breadcrumbs__item">
          <Link to={'#todo'} className="breadcrumbs__link">Add review</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Breadcrumbs;
