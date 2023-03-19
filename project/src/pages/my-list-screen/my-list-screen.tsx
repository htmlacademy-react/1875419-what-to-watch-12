import AuthorizedUserHeader from '../../components/user-header/authorized-user-header';
import { Films } from '../../types/films';
import FilmCard from '../../components/film-card/film-card';
import Footer from '../../components/footer/footer';

type MyListProp = {
  myFilms: Films[];
}

function MyListScreen({myFilms}: MyListProp): JSX.Element {
  return (
    <div className="user-page">
      <AuthorizedUserHeader myFilms={myFilms} />

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {myFilms.map((film) =>(
            <FilmCard
              key={film.id}
              id={film.id}
              name={film.name}
              previewImage={film.previewImage}
              posterImage={film.posterImage}
              previewVideoLink={film.previewVideoLink}
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
