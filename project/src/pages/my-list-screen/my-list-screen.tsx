import AuthorizedUserHeader from '../../components/user-header/authorized-user-header';
import { Films } from '../../types/films';
import FilmCard from '../../components/film-card/film-card';
import Footer from '../../components/footer/footer';
import { useState } from 'react';

type MyListProp = {
  myFilms: Films[];
}

function MyListScreen({myFilms}: MyListProp): JSX.Element {
  //eslint-disable-next-line
  const [_, setActiveFilm] = useState(0);
  return (
    <div className="user-page">
      <AuthorizedUserHeader myFilms={myFilms} />

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {myFilms.map((film) =>(
            <FilmCard
              onMouseEnterHandler={() => {setActiveFilm(film.id);}}
              key={film.id}
              id={film.id}
              name={film.name}
              previewImage={film.previewImage}
            />
          )
          )}

        </div>
      </section>

      <Footer />
    </div>
  );
}

export default MyListScreen;
