import cn from 'classnames';
import { Link, generatePath } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { chooseGenre } from '../../store/action';
import { GenreName } from '../../const';

type GenreItemProp = {
  genre: string;
}

function CatalogGenreItem({genre}: GenreItemProp): JSX.Element {

  const dispatch = useAppDispatch();
  const activeGenre = useAppSelector((state) => state.activeGenre);

  const changeGenreHandler = () => {
    dispatch(chooseGenre(genre as GenreName));
  };
  const getGenrePath = (genrePath: string): string => `#${genrePath.toLowerCase()}`;
  return (
    <li className={cn(
      'catalog__genres-item',
      {'catalog__genres-item--active': activeGenre === genre})}
    >
      <Link onClick={changeGenreHandler} to={generatePath(AppRoute.Genre, { genre: getGenrePath(genre) })} className="catalog__genres-link">{genre}</Link>
    </li>
  );
}

export default CatalogGenreItem;
