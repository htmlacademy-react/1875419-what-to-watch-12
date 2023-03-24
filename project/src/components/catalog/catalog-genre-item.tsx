import cn from 'classnames';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { chooseGenre } from '../../store/action';
import { GenreName } from '../../const';

type GenreItemProp = {
  name: string;
}

function CatalogGenreItem({name}: GenreItemProp): JSX.Element {

  const dispatch = useAppDispatch();
  const activeGenre = useAppSelector((state) => state.activeGenre);

  const changeGenreHandler = () => {
    dispatch(chooseGenre(name as GenreName));
  };

  return (
    <li className={cn(
      'catalog__genres-item',
      {'catalog__genres-item--active': activeGenre === name})}
    >
      <Link onClick={changeGenreHandler} to="#todo" className="catalog__genres-link">{name}</Link>
    </li>
  );
}

export default CatalogGenreItem;
