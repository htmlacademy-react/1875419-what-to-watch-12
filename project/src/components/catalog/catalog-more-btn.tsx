import { useAppDispatch } from '../../hooks';
import { renderMoreFilms } from '../../store/action';


function CatalogMoreBtn(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className="catalog__more">
      <button onClick={() => dispatch(renderMoreFilms())} className="catalog__button" type="button">Show more</button>
    </div>
  );
}

export default CatalogMoreBtn;
