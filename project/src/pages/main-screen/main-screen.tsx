import CatalogFilms from '../../components/catalog/catalog-films';
import MainFilmCard from '../../components/main-film-card/main-film-card';
import Footer from '../../components/footer/footer';


function MainScreen (): JSX.Element {
  return (
    <>
      <MainFilmCard />
      <div className="page-content">
        <CatalogFilms/>
        <Footer />
      </div>
    </>
  );
}

export default MainScreen;
