import React from 'react';
import MainFilmCard from '../main-film-card/main-film-card';
import Catalog from '../catalog/catalog';
import Footer from '../footer/footer';


function MainScreen (): JSX.Element {
  return (
    <>
      <MainFilmCard />
      <div className="page-content">
        <Catalog />
        <Footer />
      </div>
    </>
  );
}

export default MainScreen;
