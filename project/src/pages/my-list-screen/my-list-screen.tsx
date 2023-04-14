import { useMemo } from 'react';
import AuthorizedUserHeader from '../../components/user-header/authorized-user-header';
import { getFavoriteFilms } from '../../store/films-data/films-data.selectors';
import FilmCard from '../../components/film-card/film-card';
import Footer from '../../components/footer/footer';
import { useAppSelector } from '../../hooks';


function MyListScreen(): JSX.Element {
  const myFilms = useAppSelector(getFavoriteFilms);
  return (
    <div className="user-page">
      <AuthorizedUserHeader myFilms={myFilms} />

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {useMemo(() => (myFilms.map((film) =>(
            <FilmCard
              key={film.id}
              id={film.id}
              name={film.name}
              previewImage={film.previewImage}
              previewVideoLink={film.previewVideoLink}
            />
          )
          )), [myFilms])}

        </div>
      </section>

      <Footer />
    </div>
  );
}

export default MyListScreen;
