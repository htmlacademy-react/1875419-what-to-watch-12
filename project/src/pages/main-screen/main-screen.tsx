import Catalog from '../../components/catalog/catalog';
import { Films } from '../../types/films';
import MainFilmCard from '../../components/main-film-card/main-film-card';
import Footer from '../../components/footer/footer';

type MainFilmCardProp = {
  films: Films[];
}

function MainScreen ({films}: MainFilmCardProp): JSX.Element {
  return (
    <>
      <MainFilmCard
        films={films}
      />
      <div className="page-content">
        <Catalog
          films={films}
        />
        <Footer />
      </div>
    </>
  );
}

export default MainScreen;
