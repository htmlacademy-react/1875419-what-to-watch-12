import { Films } from '../../types/films';
import { Link, useParams } from 'react-router-dom';

type BreadcrumbsProp = {
  film: Films | null;
}

function Breadcrumbs({film}: BreadcrumbsProp): JSX.Element {
  const {id} = useParams();
  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link to={`/films/${Number(id)}`} className="breadcrumbs__link">{film?.name}</Link>
        </li>
        <li className="breadcrumbs__item">
          <Link to={'#todo'} className="breadcrumbs__link">Add review</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Breadcrumbs;
