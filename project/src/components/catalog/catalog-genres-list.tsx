import CatalogGenreItem from './catalog-genre-item';

function CatalogGenresList(): JSX.Element {
  return (
    <>
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <ul className="catalog__genres-list">
        <CatalogGenreItem name={'All genres'}/>
        <CatalogGenreItem name={'Comedies'}/>
        <CatalogGenreItem name={'Crime'}/>
        <CatalogGenreItem name={'Documentary'}/>
        <CatalogGenreItem name={'Dramas'}/>
        <CatalogGenreItem name={'Horror'}/>
        <CatalogGenreItem name={'Kids & Family'}/>
        <CatalogGenreItem name={'Romance'}/>
        <CatalogGenreItem name={'Sci-Fi'}/>
        <CatalogGenreItem name={'Thrillers'}/>
      </ul>
    </>
  );
}

export default CatalogGenresList;
