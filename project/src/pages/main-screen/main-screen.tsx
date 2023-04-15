import CatalogFilms from '../../components/catalog/catalog-films';
import MainFilmCard from '../../components/main-film-card/main-film-card';
import Footer from '../../components/footer/footer';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks';
import { checkAuthAction, fetchFilmsAction, fetchPromoFilmAction } from '../../store/api-actions';


function MainScreen (): JSX.Element {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFilmsAction());
    dispatch(fetchPromoFilmAction());
    dispatch(checkAuthAction());
  },[dispatch]);

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
