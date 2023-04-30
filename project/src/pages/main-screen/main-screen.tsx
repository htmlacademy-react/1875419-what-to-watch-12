import CatalogFilms from '../../components/catalog/catalog-films';
import MainFilmCard from '../../components/main-film-card/main-film-card';
import Footer from '../../components/footer/footer';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks';
import { fetchFilmsAction, fetchPromoFilmAction } from '../../store/api-actions';


function MainScreen (): JSX.Element {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFilmsAction());
    dispatch(fetchPromoFilmAction());
  },[dispatch]);

  return (
    <>
      <MainFilmCard />
      <div className="page-content" data-testid="main-screen">
        <CatalogFilms/>
        <Footer />
      </div>
    </>
  );
}

export default MainScreen;
